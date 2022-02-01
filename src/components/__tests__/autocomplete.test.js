import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { client } from '../../ApolloClient';
import { setupServer } from '../../mocks/setupServer';
import Autocomplete from '../autocomplete';

const ENTER_KEY_CODE = 13;

const autoCompleteSetup = () => {
  render(
    <ApolloProvider client={client}>
      <Autocomplete />
    </ApolloProvider>
  );
};

describe('Autocomplete w getBreedsByName query', () => {
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
    fireEvent.keyDown(document.activeElement, {
      key: 'Enter',
      keyCode: ENTER_KEY_CODE
    });

    expect(screen.getByDisplayValue(/Polydactyl/i)).toBeInTheDocument();
  });

  it('should show text when there is no breed with this name', async () => {
    autoCompleteSetup();
    userEvent.type(screen.getByPlaceholderText(/enter your breed/i), 'brv');

    await waitFor(() => {
      expect(screen.queryByText(/sorry, no cat breeds found/i)).toBeInTheDocument();
    });
  });

  it('should not show text when breed name is deleted', async () => {
    autoCompleteSetup();
    userEvent.type(screen.getByPlaceholderText(/enter your breed/i), 'po');

    await waitFor(() => {
      expect(screen.queryAllByTestId('suggestions-list')[0]).toBeInTheDocument();
    });
    screen.getByPlaceholderText(/enter your breed/i).focus();
    userEvent.clear(screen.getByRole('textbox'));
    expect(screen.getByRole('textbox')).toHaveAttribute('value', '');
    expect(screen.queryByText(/sorry, no cat breeds found/i)).not.toBeInTheDocument();
  });
});
