import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobilIcon,
  NavMenu,
  NavItem,
  NavBtn,
  NavLinks,
  NavBntLink,
} from "./NavbarCss";

const NavbarList = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Eventify</NavLogo>
          <MobilIcon>
            <FaBars />
          </MobilIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="">Events</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBntLink to="/createEvent">Create Event</NavBntLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavbarList;
