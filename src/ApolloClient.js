import { HttpLink, InMemoryCache, ApolloClient } from '@apollo/client';

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: 'https://cat-wiki-apollo-server.herokuapp.com',
  cache
});

export const CREATE_CLIENT = new ApolloClient({
  link,
  cache
});
