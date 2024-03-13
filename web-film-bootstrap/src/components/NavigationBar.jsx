import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">ADIFILM</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">Trending</Nav.Link>
            <Nav.Link href="#superhero">Super Hero</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
