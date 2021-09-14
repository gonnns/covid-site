import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  height: 50px;
  background-color: aqua;
  display: flex;
  padding: 1rem 1rem;
  justify-content: space-between;

  align-items: center;

  & select {
    height: 30px;
    width: 150px;
    border-radius: 5px;
    border: 0;
  }
`;

const NavStyled = styled.div`
  display: flex;
  justify-content: end;
  & a {
    padding: 0 0.5rem;
    text-decoration: none;
    cursor: pointer;
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <h1>COVID-19</h1>
      <NavStyled>
        <Link to="/">세계 현황</Link>
        <Link to="/days">나라별 누적 현황</Link>
      </NavStyled>
    </HeaderStyled>
  );
}

export default Header;
