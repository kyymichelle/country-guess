import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export const NavMain: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Nav>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/blog">Blog</Nav.Link>
      </Nav>
    </Navbar>
  );
};
