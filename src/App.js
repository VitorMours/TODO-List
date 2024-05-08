import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List.js';
import Creation from './Creation.js';

function App() {
  

  return (
    <>
      <h1>TODO List App</h1>
      
      <Creation />
      <List />

      


    </>
  );
}

export default App;
