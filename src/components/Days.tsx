import { useEffect, useMemo, useState } from 'react';
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
import { changeCountry, fetchCountries, selectCountries, selectCountry } from '../store/covidSlice';

const Div = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

function Days() {
  const dispatch = useDispatch();

  const country = useSelector(selectCountry);
  const countries = useSelector(selectCountries);

  const [covid, setCovid] = useState<CovidStatus[]>([]);

  useMemo(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  // Init
  useEffect(() => {
    if (country !== '') {
      API.Days({ country }, setCovid);
    }
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
        name: 'Covid Active',
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
        {countries.map((item) => {
          return (
            <option key={item.Slug} value={item.ISO2}>
              {item.Country}
            </option>
          );
        })}
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
