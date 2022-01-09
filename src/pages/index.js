import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import Breed from './breed';
import Home from './home';
import TopBreeds from './top-breeds';

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <Home path="/" />
      <TopBreeds path="/top-breeds" />
      <Breed path="/breed/:breedName" />
    </Router>
  );
}
