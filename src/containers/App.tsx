import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Blog, Home } from '.';

export const App: React.FC = () => {
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
};
