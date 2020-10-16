import React from 'react';
import PostsList from "./components/PostsList";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <PostsList />
      </Router>
    </div>
  );
}

export default App;
