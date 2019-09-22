import React from 'react';
import { Link } from 'react-router-dom';

import PageTitle from '../../components/pagetitle/index';

const Error = () => {
  return (
    <div id="page-wrapper">
      <PageTitle title="404 Not Found!" />
      <div className="row">
        <div className="col-md-12">
          <span>Not Found, can not found path, </span>
          <Link to="/">Go to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Error;

