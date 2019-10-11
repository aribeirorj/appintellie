import React, { Component } from 'react';
// import './Chart.css';
import '../../../node_modules/react-vis/dist/style.css';
import {
  XYPlot,
  LineMarkSeries,
  HorizontalGridLines,
  LineSeries,
  XAxis,
} from 'react-vis';

class Chart extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const data = [{ x: 0.0, y: 1519780251293 }, { x: 0.1, y: 1 }];
    return (
      <div className="Chart">
        <XYPlot height={400} width={800} XAxis={[0, 1]}>
          <HorizontalGridLines />
          <XAxis />
          <LineSeries data={data} />
        </XYPlot>
      </div>
    );
  }
}

export default Chart;
