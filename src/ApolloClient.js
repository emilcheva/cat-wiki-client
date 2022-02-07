import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const link = new HttpLink({
  uri: 'https://cat-wiki-apollo-server.herokuapp.com'
});

export const createClient = () =>
  new ApolloClient({
    cache: new InMemoryCache(),
    link
  });
