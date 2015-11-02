import _ from 'lodash';
import React, {Component, cloneElement} from 'react';
import Radium from 'radium';

import DataSetMenu from 'src/components/DataSetMenu/DataSetMenu';
import CodeEditor from 'src/components/CodeEditor/CodeEditor';
import LineChart from 'src/components/LineChart/LineChart';
import style from './Style';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First dataset',
    fill: false,
    backgroundColor: 'rgba(220,220,220,0.2)',
    borderColor: 'rgba(220,220,220,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(220,220,220,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(220,220,220,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    data: _.times(7, n => _.random(100)),
    yAxisID: 'y-axis-1',
  }, {
    label: 'My Second dataset',
    fill: false,
    backgroundColor: 'rgba(220,220,220,0.2)',
    borderColor: 'rgba(220,220,220,1)',
    pointBorderColor: 'rgba(220,220,220,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(220,220,220,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    data: _.times(7, n => _.random(100)),
  }],
};

const options = {
  stacked: false,
  maintainAspectRatio: false,
  scales: {
    xAxes: [{
      type: 'category',
      id: 'x-axis-1',
    }],
    yAxes: [{
      type: 'linear',
      id: 'y-axis-1',
    }],
  },
};

@Radium
export default class Dashboard extends Component {
  render() {
    const codeEditor = cloneElement(
      <CodeEditor />,
      {style: {width: '100%', height: 'auto', flex: '1'}}
    );
    return (
      <div style={[style.container, style.column]}>
        <div style={[{display: 'flex', flex: '6'}]}>
          <div style={[{flex: '0 0 200px'}]}>
            <DataSetMenu />
          </div>
          <div style={[{display: 'flex', flex: '1'}]}>
            {codeEditor}
          </div>
        </div>
        <div style={[style.cell, {flex: '0 0 120px'}]}>
          <LineChart width="100%" height="120" data={data} options={options} />
        </div>
      </div>
    );
  }
}
