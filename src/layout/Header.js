import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Fade,
  Form,
  FormControl,
  Image,
  Nav,
  NavDropdown,
  NavLink,
  Navbar,
  NavbarBrand,
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

function Header(props) {
  const [isDropdownOpenBlogs, setIsDropdownOpenBlogs] = useState(false);
  const [isDropdownOpenThemes, setIsDropdownOpenThemes] = useState(false);
  const [isDropdownOpenCodes, setIsDropdownOpenCodes] = useState(false);
  const [isDropdownOpenCodEasy, setIsDropdownOpenCodEasy] = useState(false);

  const onMouseEnterThemes = () => setIsDropdownOpenThemes(true);
  const onMouseLeaveThemes = () => setIsDropdownOpenThemes(false);
  const onMouseEnterBlogs = () => setIsDropdownOpenBlogs(true);
  const onMouseLeaveBlogs = () => setIsDropdownOpenBlogs(false);
  const onMouseEnterCodes = () => setIsDropdownOpenCodes(true);
  const onMouseLeaveCodes = () => setIsDropdownOpenCodes(false);
  const onMouseEnterCodEasy = () => setIsDropdownOpenCodEasy(true);
  const onMouseLeaveCodEasy = () => setIsDropdownOpenCodEasy(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      document.getElementById("lowerHeader").classList.add("navbarUp");
      document.getElementById("lowerHeader").classList.remove("navbarDown");
    } else {
      document.getElementById("lowerHeader").classList.remove("navbarUp");
      document.getElementById("lowerHeader").classList.add("navbarDown");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <div 
    style={{marginBottom:'200px'}}>
      <Navbar
        expand="lg"
        className=" fixed-top pt-1"
        id="upperHeader"
      >
        <Container>
          <Form className="d-flex ms-auto">
            <FormControl
              type="search"
              placeholder="Search Source Code"
              className="me-2 search text-light"
              aria-label="Search"
              style={{background:'transparent'}}
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Container>
      </Navbar>
      <Navbar
        expand="lg"
        className="bg-body-tertiary fixed-top navbarDown"
        id="lowerHeader"
      >
        <Container>
          <NavbarBrand href="/">
            <Image
              width={100}
              className="img-fluid"
              src={require("../assets/images/logo.png")}
            />
          </NavbarBrand>
          <NavbarToggle aria-controls="navbarScroll" />
          <NavbarCollapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown
                title="Blogs"
                id="navbarScrollingDropdown"
                onMouseOver={onMouseEnterBlogs}
                onMouseLeave={onMouseLeaveBlogs}
                show={isDropdownOpenBlogs}
              >
                <NavDropdown.Item href="/blog/epoxy">Epoxy Resin</NavDropdown.Item>
                <NavDropdown.Item href="/blog/webdevelopment">Web Development</NavDropdown.Item>
                <NavDropdown.Item href="/blog/frontframework">Front-End Frameworks</NavDropdown.Item>
                <NavDropdown.Item href="/blog/backframework">Back-End Frameworks</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Themes"
                id="navbarScrollingDropdown"
                onMouseOver={onMouseEnterThemes}
                onMouseLeave={onMouseLeaveThemes}
                show={isDropdownOpenThemes}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Codes"
                id="navbarScrollingDropdown"
                onMouseOver={onMouseEnterCodes}
                onMouseLeave={onMouseLeaveCodes}
                show={isDropdownOpenCodes}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="ms-5"
                title="CodEasy Products"
                id="navbarScrollingDropdown"
                onMouseOver={onMouseEnterCodEasy}
                onMouseLeave={onMouseLeaveCodEasy}
                show={isDropdownOpenCodEasy}
              >
                <NavDropdown.Item href="#action3">Bills Management System</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Funds Management System</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Leads Management System</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
