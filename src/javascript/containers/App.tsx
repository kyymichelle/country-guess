import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { NavMain } from '../modules/Nav';

import { Blog, Home } from '.';

type Props = {};

// type State = {
//   count: number;
// };

export class App extends React.Component<Props, {}> {
  // state: State = {
  //   count: 0
  // };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/blog" component={Blog} exact />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
