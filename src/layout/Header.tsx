import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { changeCountry, selectCountry } from '../store/covidSlice';

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
  const dispatch = useDispatch();
  const country = useSelector(selectCountry);

  const onChangeCountry = (event: any) => {
    dispatch(changeCountry(event.target.value));
  };

  return (
    <HeaderStyled>
      <h1>COVID-19</h1>
      <NavStyled>
        <Link to="/">금일현황</Link>
        <Link to="/day">일별현황</Link>
      </NavStyled>
      <select onChange={onChangeCountry} value={country}>
        <option value="kr">한국</option>
        <option value="us">미국</option>
      </select>
    </HeaderStyled>
  );
}

export default Header;
