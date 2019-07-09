import React, { Component } from 'react';

import { NavMain } from '../modules/Nav';

export class Blog extends React.Component<{}, {}> {
  // state: State = {
  //   count: 0
  // };

  render() {
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

        <NavMain></NavMain>
        <h1>Blog</h1>
      </div>
    );
  }
}
