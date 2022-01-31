import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: 'https://cat-wiki-apollo-server.herokuapp.com',
  cache: new InMemoryCache()
});

// Isolate Apollo client so it could be reused
// in both application runtime and tests.
export const client = new ApolloClient({
  cache,
  link
});
