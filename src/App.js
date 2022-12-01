 
import './App.css';
import Detailsp from "./components/product_details/Detailsp"
import { ChakraProvider } from '@chakra-ui/react'
import Login from './components/landing_pg/Login/Login';

import 'bootstrap/dist/css/bootstrap.min.css';
 

function App() {
  return (
    <div className="App" >
      <Login />
     </div>
  );
}

export default App;
