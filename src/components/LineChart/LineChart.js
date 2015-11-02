import React, {Component, PropTypes} from 'react';
import Chart from 'Chart.js';

export default class LineChart extends Component {
  static propTypes = {
    data: PropTypes.object,
    height: PropTypes.string,
    options: PropTypes.object,
    style: PropTypes.object,
    width: PropTypes.string,
  };

  componentDidMount() {
    this.lineChart = new Chart.Line(this.refs.canvas, {
      data: this.props.data,
      options: this.props.options,
    });
  }

  render() {
    return (
      <canvas id="line-chart" width={this.props.width} height={this.props.height} ref="canvas" />
    );
  }
}
