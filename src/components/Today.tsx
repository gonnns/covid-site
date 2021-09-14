import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { GridComponent, TitleComponent, TooltipComponent } from 'echarts/components';

import { CanvasRenderer } from 'echarts/renderers';
import { EChartsInstance, EChartsOption } from 'echarts-for-react';

import { sortBy } from 'lodash';
import API from '../constants/ApiConstant';
import { Summary } from '../interface/Summary';

const Div = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

function Today() {
  const [covid, setCovid] = useState<Summary>(null);

  const loadSummary = async () => {
    const response = await axios.get(API.SUMMARY());
    setCovid(response.data);
  };

  // Init
  useEffect(() => {
    loadSummary();
  }, []);

  echarts.use([TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer]);

  const options: EChartsOption = {
    tooltip: { show: true },
    xAxis: {
      type: 'category',
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Covid Today',
        type: 'bar',
        data: covid
          ? sortBy(covid.Countries, ['NewConfirmed'])
              .reverse()
              .slice(0, 10)
              .map((item) => [item.Country, item.NewConfirmed])
          : [],
      },
    ],
  };

  const onChartReady = (instance: EChartsInstance) => {
    console.log(instance);
  };

  return (
    <Div>
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

export default Today;
