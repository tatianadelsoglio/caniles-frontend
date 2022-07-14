import { ApolloProvider } from '@apollo/client';
import './App.css';
import AppRouter from './components/router/AppRouter';
import apolloClient from './configApollo/ApolloClient';


const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
        <AppRouter/>
    </ApolloProvider>

  );
}
 
export default App;
