import React from 'react';
import { Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import BlogMarkdown from '../../static/markdown/blog.md';
import { NavMain } from '../components/Nav';

interface BlogState {
  markdown: string;
}

export class Blog extends React.Component<{}, BlogState> {
  state: BlogState = {
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
      <div className="page-blog">
        <NavMain></NavMain>
        <Container>
          <h1>Blog</h1>
          <ReactMarkdown source={markdown} />
        </Container>
      </div>
    );
  }
}
