import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient({
  // options go here
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
);
 