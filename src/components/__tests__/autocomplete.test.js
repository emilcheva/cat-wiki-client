import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { client } from '../../ApolloClient';
import { setupServer } from '../../mocks/setupServer';
import Autocomplete from '../autocomplete';

const autoCompleteSetup = () => {
  render(
    <ApolloProvider client={client}>
      <Autocomplete />
    </ApolloProvider>
  );
};

describe('Testing Autocomplete w getBreedsByName query', () => {
  setupServer();
  it('should render Autocomplete results when text is entered', async () => {
    autoCompleteSetup();
    userEvent.type(screen.getByPlaceholderText(/enter your breed/i), 'po');

    await waitFor(() => {
      expect(screen.queryAllByTestId('suggestions-list')[0]).toBeInTheDocument();
      expect(screen.queryAllByTestId('suggestions-list')).toMatchInlineSnapshot(`
          Array [
            <ul
              class="css-1vaqrnj"
              data-testid="suggestions-list"
            >
              <li>
                <a
                  href="/breed/Polydactyl"
                >
                  <span
                    class="css-1gd2a80"
                  >
                    Polydactyl
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/breed/Colorpoint Shorthair"
                >
                  <span
                    class="css-pahk93"
                  >
                    Colorpoint Shorthair
                  </span>
                </a>
              </li>
            </ul>,
          ]
        `);
    });
  });

  it('should select first breed name on enter', async () => {
    autoCompleteSetup();
    userEvent.type(screen.getByPlaceholderText(/enter your breed/i), 'po');

    await waitFor(() => {
      expect(screen.queryAllByTestId('suggestions-list')[0]).toBeInTheDocument();
    });
    screen.getByPlaceholderText(/enter your breed/i).focus();
    fireEvent.keyDown(document.activeElement || document.body, {
      key: 'Enter',
      keyCode: 13,
      which: 13
    });

    expect(screen.getByDisplayValue(/Polydactyl/i)).toBeInTheDocument();
  });

  it('should show text when breed name is deleted', async () => {
    autoCompleteSetup();
    userEvent.type(screen.getByPlaceholderText(/enter your breed/i), 'po');

    await waitFor(() => {
      expect(screen.queryAllByTestId('suggestions-list')[0]).toBeInTheDocument();
    });
    screen.getByPlaceholderText(/enter your breed/i).focus();
    userEvent.clear(screen.getByRole('textbox'));
    expect(screen.getByRole('textbox')).toHaveAttribute('value', '');
    expect(screen.getByText(/sorry, no cat breeds found/i)).toBeInTheDocument();
  });
});
