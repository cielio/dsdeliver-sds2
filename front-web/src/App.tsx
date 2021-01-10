import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routers from './Routers';

function App() {
  return (
    <>
      <Routers />
      <ToastContainer />
    </>
  );
}

export default App;
