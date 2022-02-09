import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { fireEvent, render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createClient } from '../../ApolloClient';
import { server } from '../../mocks/server';
import Autocomplete from '../autocomplete';

const ENTER_KEY_CODE = 13;
const requestsMap = new Map();

const listener = (req) => requestsMap.set(req.id, req.body.variables);

beforeAll(() => {
  server.listen();
  server.events.on('request:start', (req) => {
    listener(req);
  });
});

afterEach(() => {
  requestsMap.clear();
  server.resetHandlers();
});

afterAll(() => {
  server.events.removeListener('request:start', listener);
  server.close();
});

const autoCompleteSetup = () => {
  render(
    <ApolloProvider client={createClient()}>
      <Autocomplete />
    </ApolloProvider>
  );
};

describe('Autocomplete w getBreedsByName query', () => {
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
    userEvent.type(screen.getByPlaceholderText(/enter your breed/i), 'pers');

    await waitFor(() => {
      expect(screen.queryAllByTestId('suggestions-list')[0]).toBeInTheDocument();
    });
    screen.getByPlaceholderText(/enter your breed/i).focus();
    userEvent.clear(screen.getByRole('textbox'));
    expect(screen.getByRole('textbox')).toHaveAttribute('value', '');
    expect(screen.queryByText(/sorry, no cat breeds found/i)).not.toBeInTheDocument();
  });

  it('typing should be debounced', async () => {
    autoCompleteSetup();

    userEvent.type(screen.getByPlaceholderText(/enter your breed/i), 'pers');

    await waitFor(() => {
      expect(screen.queryAllByTestId('suggestions-list')[0]).toBeInTheDocument();
    });

    const getAllRequestVariables = [...requestsMap.values()].map(({ breedName }) => breedName);

    expect(getAllRequestVariables).toEqual(['pers']);
  });

  it('should not send request for fast typing ( keystroke faster than 500ms )', async () => {
    jest.useFakeTimers('modern');
    autoCompleteSetup();

    const searchInput = screen.getByPlaceholderText(/enter your breed/i);

    await userEvent.type(searchInput, 'sphynx');

    act(() => {
      jest.advanceTimersByTime(499);
    });
    expect([...requestsMap.values()]).toHaveLength(0)
    act(() => {
      jest.advanceTimersByTime(1);
    });
    const getAllRequestVariables = [...requestsMap.values()].map(({ breedName }) => breedName);
    expect(getAllRequestVariables).toEqual(['sphynx']);

    jest.useRealTimers();
  });
});
