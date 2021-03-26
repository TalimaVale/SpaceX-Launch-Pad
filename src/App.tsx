import { ApolloProvider } from '@apollo/client';
import { useApollo } from './apollo';
import SiteRouter from './routers/SiteRouter';
import Helmet from './components/Helmet';

function App() {
  const client = useApollo();

  return (
    <ApolloProvider client={client}>
      <Helmet />
      <SiteRouter />
    </ApolloProvider>
  );
}

export default App;
