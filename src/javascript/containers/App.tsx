import React from 'react';
import './App.css';
import { Router, Route, Link } from 'react-router-dom';

import { Blog } from '.';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <Route path="/" exact component={Index} /> */}
      <Router>
        <Route path="/blog" component={Blog} />
      </Router>
    </div>
  );
};

export default App;
