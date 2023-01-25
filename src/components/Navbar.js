import { Button } from 'bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navbar from '../assets/img/navbrand.png'

function Navbars() {
  return (
   <div className="navbar-color position-fixed w-100">
    <Navbar bg='transparent' expand="lg">
      <Container>
        <img src={navbar} alt="" />
        <Navbar.Brand className='navbar-brand ms-2' href="#home">Rumah Impian</Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className='ms-2 fw-bold' href="#home">BERANDA</Nav.Link>
            <Nav.Link className='ms-2' href="#link">LAYANAN</Nav.Link>
            <Nav.Link className='ms-2' href="#link">FITURE</Nav.Link>
            <Nav.Link className='ms-2' href="#link">KONTAK</Nav.Link>
          </Nav>
          <div className="navbar">
        <Nav.Link href="#link">DAFTAR</Nav.Link>
        <button className=' button-masuk ms-4'>MASUK</button>
        </div>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    </div>


    
  );
}

export default Navbars;