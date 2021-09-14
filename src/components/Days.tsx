import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, TitleComponent, TooltipComponent } from 'echarts/components';

import { CanvasRenderer } from 'echarts/renderers';
import { EChartsInstance, EChartsOption } from 'echarts-for-react';

import API from '../constants/ApiConstant';
import { CovidStatus } from '../interface/CovidStatus';
import { changeCountry, selectCountry } from '../store/covidSlice';

const Div = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

function Days() {
  const dispatch = useDispatch();
  const country = useSelector(selectCountry);
  const [covid, setCovid] = useState<CovidStatus[]>([]);

  // Init
  useEffect(() => {
    API.Days({ country }, setCovid);
  }, [country]);

  echarts.use([TitleComponent, TooltipComponent, GridComponent, LineChart, CanvasRenderer]);

  const options: EChartsOption = {
    tooltip: { show: true },
    xAxis: {
      type: 'time',
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Covid Today',
        type: 'line',
        data: covid.map((item) => [item.Date, item.Active]),
      },
    ],
  };

  // START Listener
  const onChangeCountry = (event: any) => {
    dispatch(changeCountry(event.target.value));
  };

  const onChartReady = (instance: EChartsInstance) => {
    console.log(instance);
  };
  // END Listener

  return (
    <Div>
      <select onChange={onChangeCountry} value={country}>
        <option value="kr">한국</option>
        <option value="us">미국</option>
      </select>
      <ReactEChartsCore
        echarts={echarts}
        option={options}
        notMerge
        lazyUpdate
        onChartReady={onChartReady}
      />
    </Div>
  );
}

export default Days;
