import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4on0v1j0euq01xnclqo9civ/master',
  cache: new InMemoryCache()
});