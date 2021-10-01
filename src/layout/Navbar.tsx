import { FaBars } from 'react-icons/fa';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavMenu,
  NavTitle,
} from './styled/NavbarStyled';

export interface NavbarProps {
  toggle: any;
}

function Navbar({ toggle }: NavbarProps) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavTitle to="/">Covid 19</NavTitle>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Today</NavLinks>
              <NavLinks to="/days">Days</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/about">About</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
