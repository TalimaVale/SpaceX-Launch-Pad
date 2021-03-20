import { ApolloProvider } from '@apollo/client';
import { useApollo } from './apollo';
import SiteRouter from './routers/SiteRouter';

function App() {
  const client = useApollo();

  return (
    <ApolloProvider client={client}>
      <SiteRouter />
    </ApolloProvider>
  );
}

export default App;
