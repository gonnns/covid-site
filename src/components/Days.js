import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectCountry } from '../store/covidSlice';

const Div = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

function Days() {
  const country = useSelector(selectCountry);
  const [covid, setCovid] = useState([]);

  const loadToday = async (target) => {
    const response = await axios.get(`https://api.covid19api.com/total/dayone/country/${target}`);
    setCovid(response.data);
  };

  // Init
  useEffect(() => {
    loadToday(country);
  }, [country]);

  return (
    <Div>
      {covid.map((item) => {
        return <span>{item.Active}</span>;
      })}
    </Div>
  );
}

export default Days;
