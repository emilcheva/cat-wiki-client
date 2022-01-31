import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { render, screen } from '@testing-library/react';
import { client } from '../../ApolloClient';
import TopBreeds from '../../pages/top-breeds';
import { setupServer } from '../../mocks/setupServer';
import Breed from '../../pages/breed';

describe('Testing TopBreeds w getBreeds query', () => {
  setupServer();
  it('should render TopBreeds component', async () => {
    render(
      <ApolloProvider client={client}>
        <TopBreeds />
      </ApolloProvider>
    );

    const breedName = await screen.findByText('British Shorthair');
    expect(breedName).toBeTruthy();
  });
});

describe('Testing Breed w getBreedsByName query', () => {
  setupServer();
  it('should render Breed component', async () => {
    render(
      <ApolloProvider client={client}>
        <Breed breedName="Munchkin" />
      </ApolloProvider>
    );

    const breedName = await screen.findByText('Munchkin');
    expect(breedName).toBeTruthy();
    const temperament = await screen.findByText(/agile, easy going, intelligent, playful/i);
    expect(temperament).toBeTruthy();
  });
});
