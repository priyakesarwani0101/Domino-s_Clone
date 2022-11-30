import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import {storeData} from './components/products/product_store/productstore'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={storeData}>
   <ChakraProvider>
 <App />
  </ChakraProvider>
  </Provider>
  
   
  
);


reportWebVitals();
