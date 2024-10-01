import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsOrganization from 'highcharts/modules/organization';
import HighchartsReact from 'highcharts-react-official';
import { CnMasters }  from "../../db/masters/AllMasterDb";

// Initialize the organization module
HighchartsOrganization(Highcharts);

const orgChartData = CnMasters?.flat()?.map(master => {
  return master?.successors?.map(successor => {
    const successorObj = CnMasters?.flat()?.find(item => item.name_en === successor);
    if (successorObj) {
      return {
        from: master.name_en,
        to: successorObj?.name_en
      };
    }
    return null;
  }).filter(item => item !== null);
}).flat();
const HighchartsOrgChart = () => {
  const chartOptions = {
    chart: {
      type: 'organization',
      height: 600
    },
    title: {
      text: 'Zen Masters Organization Chart'
    },
    series: [
      {
        type: 'organization',
        name: 'Zen Masters',
        keys: ['from', 'to'],
        data: orgChartData,
        nodes: CnMasters?.flat()?.map(master => ({
          id: master.name_en,
          name: master.name_en,
          title: master.birth_death_time.join(' - '),
          image: master.image
        })),
        colorByPoint: true,
        dataLabels: {
          color: 'white'
        },
        borderColor: 'white',
        nodeWidth: 65
      }
    ],
    tooltip: {
      outside: true
    }
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default HighchartsOrgChart;
