import React from 'react';
import { ApolloProvider } from 'react-apollo';
import './styles/index.scss';
import { Portfolio } from './containers';
import setUpApolloClient from './apollo.js';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className='App'>
      <ApolloProvider client={setUpApolloClient()}>
        <Portfolio />
      </ApolloProvider>
    </div>
  );
}

export default App;
