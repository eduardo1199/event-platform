import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: import.meta.env.VITE_URL_API,
  cache: new InMemoryCache(),
  headers: {
    'Autorization': `Bearer ${import.meta.env.VITE_API_ACESSS_TOKEN}`
  }
});