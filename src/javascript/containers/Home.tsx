import React, { Component } from 'react';

import { NavMain } from '../modules/Nav';

export class Home extends React.Component<{}, {}> {
  // state: State = {
  //   count: 0
  // };

  render() {
    return (
      <div className="App">
        <NavMain></NavMain>
        <h1>Home</h1>
      </div>
    );
  }
}
