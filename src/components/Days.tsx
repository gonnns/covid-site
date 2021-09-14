import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, TitleComponent, TooltipComponent } from 'echarts/components';

import { CanvasRenderer } from 'echarts/renderers';
import { EChartsInstance } from 'echarts-for-react';

import API from '../constants/ApiConstant';
import { CovidStatus } from '../interface/CovidStatus';
import { selectCountry } from '../store/covidSlice';

const Div = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

function Days() {
  const country = useSelector(selectCountry);
  const [covid, setCovid] = useState<CovidStatus[]>([]);

  const loadToday = async (target: string) => {
    const response = await axios.get(API.DAYS({ country: target }));
    setCovid(response.data);
  };

  // Init
  useEffect(() => {
    loadToday(country);
  }, [country]);

  echarts.use([TitleComponent, TooltipComponent, GridComponent, LineChart, CanvasRenderer]);

  const options = {};

  const onChartReady = (instance: EChartsInstance) => {
    console.log(instance);
  };

  return (
    <Div>
      <ReactEChartsCore echarts={echarts} option={options} notMerge lazyUpdate onChartReady={onChartReady} />
      {covid.map((item) => {
        return <span>{item.Active}</span>;
      })}
    </Div>
  );
}

export default Days;