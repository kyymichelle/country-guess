import React from 'react';
import { Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

import BlogMarkdown from '../assets/markdown/blog.md';
import { NavMain } from '../components/Nav';

export const Blog: React.FC = () => {
  const [markdown, setMarkdown] = React.useState<string>('');

  React.useEffect(() => {
    fetch(BlogMarkdown)
      .then(response => response.text())
      .then(text => {
        setMarkdown(text);
      });
  }, []);

  return (
    <div className="page-blog">
      <NavMain></NavMain>
      <Container className="py-5">
        <h1>Blog</h1>
        <ReactMarkdown source={markdown} />
      </Container>
    </div>
  );
};
