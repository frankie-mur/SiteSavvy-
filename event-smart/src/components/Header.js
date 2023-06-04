import { React, useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

function Header() {
     const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if(prevScrollPos < currentScrollPos && currentScrollPos > 200){
        setVisible(false);
      }
      else { setVisible(true); }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);
  return (
  <>
    {visible && (
        <Navbar className="mb-5" bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Event Smart Productions</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="/Services">Our Services</Nav.Link>
              <Nav.Link href="#performers">Performers</Nav.Link>
              <Nav.Link href="/EventElements">Event Elements</Nav.Link>
              <Nav.Link href="#socials">Socials</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )}
</>
  );
}

export default Header;