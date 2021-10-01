import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
  SideBtnRoute,
  SideBtnWrap,
} from './styled/SidebarStyled';

export interface SidebarProps {
  isOpen: boolean;
  toggle: any;
}

function Sidebar({ isOpen, toggle }: SidebarProps) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="/">
            Today
          </SidebarLink>
          <SidebarLink onClick={toggle} to="/days">
            Days
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
      <SideBtnWrap>
        <SideBtnRoute to="/about">About</SideBtnRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
}

export default Sidebar;
