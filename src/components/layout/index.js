import React, { Component } from 'react';

import TopNav from '../topnav/index';
import SideNav from '../sidenav/index';

import './index.css';
import './index.scss';

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="wrapper">
        <TopNav />
        <SideNav />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
