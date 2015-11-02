import _ from 'lodash';
import cn from 'classnames';
import anny from 'anny';
import React, {Component} from 'react';
import {List, ListItem, Segment} from 'stardust';

export default class DataSetMenu extends Component {
  state = {activeItemLabel: ''};

  onClick = e => {
    this.setState({
      activeItemLabel: e.target.innerText,
    });
  };

  render() {
    const items = _.map(anny.DATA, (dataSet, name) => {
      const label = _.startCase(name);
      const isActive = this.state.activeItemLabel === label;
      return (
        <ListItem key={name} onClick={this.onClick} className={cn({active: isActive})}>
          {label}
        </ListItem>
      );
    });

    return (
      <Segment className="basic">
        <div className="header">
          <i className="database icon" />
          Data Set
        </div>
        <List className="selection">
          {items}
        </List>
      </Segment>
    );
  }
}
