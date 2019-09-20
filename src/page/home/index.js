import React, { Component } from 'react';

import './index.scss';

import PageTitle from '../../components/pagetitle/index';

class Home extends Component {
  render() {
    return (
      <div id="page-wrapper">
        <PageTitle title="Home" />
      </div>
    );
  }
}

export default Home;
