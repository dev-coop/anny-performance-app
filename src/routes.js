import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

class About extends Component {
  static propTypes = {
    children: PropTypes.node,
  };
  render() {
    return <h3>About</h3>;
  }
}

class Inbox extends Component {
  static propTypes = {
    children: PropTypes.node,
  };
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || 'Welcome to your Inbox'}
      </div>
    );
  }
}

class Message extends Component {
  static propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
  };
  render() {
    return <h3>Message {this.props.params.id}</h3>;
  }
}

render((
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));
