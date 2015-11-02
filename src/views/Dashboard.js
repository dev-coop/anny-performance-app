import React, {Component, cloneElement} from 'react';
import Radium from 'radium';

import DataSetMenu from 'src/components/DataSetMenu/DataSetMenu';
import CodeEditor from 'src/components/CodeEditor/CodeEditor';

const style = {
  row: {
    display: 'flex',
    flexFlow: 'row',
  },
  column: {
    display: 'flex',
    flexFlow: 'column',
  },
  cell: {
    flex: '1',
  },
  container: {
    width: '100vw',
    height: '100vh',
  },
  aside: {
    flex: '0 0 180px',
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
        <div style={[style.cell, {flex: '1 0 100px', background: 'lightblue'}]}>
          Graph
        </div>
      </div>
    );
  }
}
