import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useUserActions } from "../_actions/useUserActions";

function Navegacion() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Chaco Emprendedores</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/emprendimientos">Emprendimientos</Nav.Link>
            <Nav.Link href="/events">Eventos</Nav.Link>
            <Nav.Link href="/users">Usuarios</Nav.Link>
            <Nav.Link onClick={useUserActions.logout} className="nav-item nav-link">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
export default Navegacion;
