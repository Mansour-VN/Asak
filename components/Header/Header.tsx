import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { RiTelegramLine } from 'react-icons/ri';
import { TbPhoneCalling } from 'react-icons/tb';
import  Button from '../Button/Button';
import SocialMedial from '../SocialMedia/SocialMedia';


function BasicExample() {
  return (
     <>
        <div className='header_title'>
               <div className="header_title_Logo">
               <img src="./assets/image/DIAN.png" alt="" />
               <p>آساک قرن</p>
               </div>
               <div className='header_title__Media'>
                    <SocialMedial/>
               </div>
               <div className="header_title_CallAndCatalog">
                    <div>
                         <p>021-96646</p>
                         <TbPhoneCalling/>
                    </div>
                    <Button  text={"دانلود کاتالوگ"} size={"normal"} color={"official"}/>
               </div>
          </div>
     <Navbar bg="light" expand="lg">
          <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
               <Nav.Link href="#home">آساک</Nav.Link>
               <Nav.Link href="#link">Link</Nav.Link>
               <NavDropdown title="Dropdown" id="basic-nav-dropdown">
               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.2">
                    Another action
               </NavDropdown.Item>
               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item href="#action/3.4">
                    Separated link
               </NavDropdown.Item>
               </NavDropdown>
               </Nav>
          </Navbar.Collapse>
          </Container>
     </Navbar>
     </>
  );
}

export default BasicExample;