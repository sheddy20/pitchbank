import React from 'react';
import './App.css';
import './components/Styles.css';
import Title from './components/Title';
import Home from "./components/Home";
import Blog from './components/Blog';
import About from './components/About';


function App() {
  return (
    <div>
      <h1>hello world</h1>
      <Title />
      <Blog />
      <Home />
      <About />
    </div>
  );
}

export default App;
