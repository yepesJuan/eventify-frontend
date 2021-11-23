import { FaBars } from "react-icons/fa";
import { scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobilIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBntLink,
} from "./NavbarCss";

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop(0);
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Eventify
          </NavLogo>
          <MobilIcon onClick={toggle}>
            <FaBars />
          </MobilIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="events"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-15}
                active="true"
              >
                Events
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="signup"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-15}
                active="true"
              >
                Sign Up
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="footer"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-15}
                active="true"
              >
                About
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBntLink to="/login">Login</NavBntLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
