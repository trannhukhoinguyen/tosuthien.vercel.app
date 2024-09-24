---
// OrgChart.astro - An Astro component for the OrgChart
import { useEffect } from 'react';

const initializeOrgChart = () => {
  // Ensure OrgChart.js is available before initializing
  new OrgChart(document.getElementById('tree'), {
    nodes: [
      { id: 1, name: 'CEO' },
      { id: 2, pid: 1, name: 'Manager' },
      { id: 3, pid: 1, name: 'Assistant' }
    ]
  });
};

useEffect(() => {
  initializeOrgChart();
}, []);
---
    <html>
    <head>
      <script src="https://balkangraph.com/js/latest/OrgChart.js" defer></script>
    </head>
    <body>
    <slot />
    </body>
    </html>


  <div id="tree"></div>
