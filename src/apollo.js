import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

import environment from './config/environment';
const githubApi = 'https://api.github.com/graphql';

const setUpApolloClient = () => {
  const token = environment.githubToken;
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(new HttpLink({ uri: githubApi })),
    cache: new InMemoryCache(),
  });
  return client;
};

export default setUpApolloClient;
