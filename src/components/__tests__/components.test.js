import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { createClient } from '../../ApolloClient';
import { render, screen } from '@testing-library/react';
import TopBreeds from '../../pages/top-breeds';
import { setupServer } from '../../mocks/setupServer';
import Breed from '../../pages/breed';

describe('TopBreeds w getBreeds query', () => {
  setupServer();
  it('should render TopBreeds component', async () => {
    render(
      <ApolloProvider client={createClient()}>
        <TopBreeds />
      </ApolloProvider>
    );

    const breedName = await screen.findByText('British Shorthair');
    expect(breedName).toBeInTheDocument();
  });
});

describe('Breed w getBreedsByName query', () => {
  setupServer();
  it('should render Breed component', async () => {
    render(
      <ApolloProvider client={createClient()}>
        <Breed breedName="Munchkin" />
      </ApolloProvider>
    );

    const breedName = await screen.findByText('Munchkin');
    expect(breedName).toBeInTheDocument();
    const temperament = await screen.findByText(/agile, easy going, intelligent, playful/i);
    expect(temperament).toBeInTheDocument();
  });
});
