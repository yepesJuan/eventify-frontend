import React from "react";
import { Nav, NavbarContainer, NavLogo } from "./NavbarStyle";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Eventify</NavLogo>
          {/* <MobilIcon>
            <FaBars />
          </MobilIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="About">About</NavLinks>
            </NavItem>
          </NavMenu> */}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
