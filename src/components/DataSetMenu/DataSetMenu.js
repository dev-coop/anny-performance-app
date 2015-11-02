import _ from 'lodash';
import anny from 'anny';
import React, {Component} from 'react';
import {List, ListItem, Segment} from 'stardust';

export default class DataSetMenu extends Component {
  render() {
    const items = _.map(anny.DATA, (dataSet, name) => {
      return <ListItem key={name}>{_.startCase(name)}</ListItem>;
    });
    return (
      <Segment className="basic">
        <div className="header">
          <i className="server icon" />
          Data Set
        </div>
        <List className="selection">
          {items}
        </List>
      </Segment>
    );
  }
}
