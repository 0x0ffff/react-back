import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Util from '../../util/util';
import User from '../../service/user';

const _mm = new Util();
const _user = new User();

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: _mm.getStorage('userInfo').username || ""
    }
  }

  onLogout() {
    _user.logout().then(res => {
      _mm.removeStorage('userInfo');
      window.location.href = "/login";
    }, errMsg => {
      _mm.errorTips(errMsg);
    });
  }

  render() {
    return (
      <div className="navbar navbar-default top-navbar">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/"><b>Back</b></Link>
        </div>

        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown">
            <a className="dropdown-toggle">
              <i className="fa fa-user fa-fw"></i>
              {
                this.state.username
                ? <span>欢迎，{this.state.username}</span>
                : <span>欢迎您</span>
              }
              <span>欢迎您</span>
              <i className="fa fa-caret-down"></i>
            </a>
            <ul className="dropdown-menu dropdown-user">
              <li>
                <a onClick={() => {this.onLogout()}}>
                  <i className="fa fa-sign-out fa-fw"></i>
                  <span>退出登录</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default TopNav;
