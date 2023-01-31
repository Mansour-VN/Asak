import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { RiTelegramLine } from 'react-icons/ri';
import { TbPhoneCalling } from 'react-icons/tb';
import Button from '../Button/Button';
import SocialMedial from '../SocialMedia/SocialMedia';
import Image from 'next/image';



function BasicExample() {
     return (
          <>
               <div className='header_title'>
                    <div className="header_title_Logo">
                         <Link href="/">
                              <Image
                                   src="/assets/image/dian.svg" alt="Picture of the author"
                                   width={80}
                                   height={80}
                              />
                              <p>آساک قرن</p>
                         </Link>
                    </div>
                    <div className='header_title__Media'>
                         <SocialMedial />
                    </div>
                    <div className="header_title_CallAndCatalog">
                         <div>
                              <p>021-96646</p>
                              <TbPhoneCalling />
                         </div>
                         <Button text={"دانلود کاتالوگ"} size={"normal"} color={"official"} />
                    </div>
               </div>
               <Navbar bg="light" expand="lg">
                    <Container>
                         <Navbar.Toggle aria-controls="basic-navbar-nav" />
                         <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="me-auto">
                                   <Nav.Link href="#home">آساک</Nav.Link>
                                   <Nav.Link href="#link">محصولات</Nav.Link>
                                   <Nav.Link href="#link">خدمات</Nav.Link>
                                   <Nav.Link href="#link">آساکی شو</Nav.Link>
                                   <Nav.Link href="#link">تماس باما</Nav.Link>
                                   <Nav.Link href="/aboutPage/About">
                                        درباره‌ی ما
                                   </Nav.Link>
                              </Nav>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </>
     );
}

export default BasicExample;