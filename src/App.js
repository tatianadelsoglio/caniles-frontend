import { ApolloProvider } from '@apollo/client';
import { useState } from "react";
import './App.css';
import { GlobalContext } from './components/context/GlobalContext';
import AppRouter from './components/router/AppRouter';
import apolloClient from './configApollo/ApolloClient';


const App = () => {
    //* maneja visibilidad y contenido del sideDrawerConfig para atomizar en un solo state ambos datos
    const [sideDrawerConfig, setSideDrawerConfig] = useState({
      visible: false,
      content: "",
    });
    //* index del item activo, (3 dashboard)
    const [activeMenuItem, setActiveMenuItem] = useState(3);
    //* index del modulo activo que mantiene las rutas con modulos sin tener en cuenta el drawer
    const [activeModuleItem, setActiveModuleItem] = useState(3);

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalContext.Provider
        value={{
          sideDrawerConfig,
          setSideDrawerConfig,
          activeMenuItem,
          setActiveMenuItem,
          activeModuleItem,
          setActiveModuleItem,
        }}
      >
        <AppRouter/>

      </GlobalContext.Provider>
    </ApolloProvider>

  );
}
 
export default App;
