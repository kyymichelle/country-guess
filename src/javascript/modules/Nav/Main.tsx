import React from 'react';
import { Link } from 'react-router-dom';
import { Blog } from '../../containers';

export const NavMain: React.FC = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  );
};
