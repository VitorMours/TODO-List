import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List.js';
import Creation from './Creation.js';
import Footer from './Footer.js';
function App() {
  

  return (
    <>
      <header>
        <h1>TODO List App</h1>
      </header>


      <main>
        <section class="creation">
          <Creation />
        </section>

        <section class="list">
          <List />
        </section>  
      </main>
      <Footer />
    </>
  );
}

export default App;
