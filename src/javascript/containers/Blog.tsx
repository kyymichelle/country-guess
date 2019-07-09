import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import BlogMarkdown from '../../static/markdown/blog.md';
import { NavMain } from '../modules/Nav';

type State = {
  markdown: string;
};

export class Blog extends React.Component<{}, State> {
  state: State = {
    markdown: '',
  };

  componentWillMount() {
    fetch(BlogMarkdown)
      .then(response => response.text())
      .then(text => {
        this.setState({ markdown: text });
      });
  }

  render() {
    const { markdown } = this.state;

    return (
      <div className="App">
        <NavMain></NavMain>
        <h1>Blog</h1>
        <ReactMarkdown source={markdown} />
      </div>
    );
  }
}
