import React, { Component } from 'react'

import Util from '../../util/util';
import User from '../../service/user';
import PageTitle from '../../components/pagetitle/index';
import Pagination from '../../util/pagination/index';
import TableList from '../../util/tableList/index';

const _mm = new Util();
const _user = new User();

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      pageNum: 1
    };
  }

  _loadUserList() {
    _user.getUserList(this.state.pageNum).then(res => {
      this.setState(res);
    }, errMsg => {
      this.setState({
        list: []
      });
      _mm.errorTips(errMsg);
    });
  }

  _onPageNumChange(pageNum) {
    this.setState({
      pageNum: pageNum
    }, () => {
      this._loadUserList();
    })
  }

  componentDidMount() {
    this._loadUserList()
  }

  render() {
    let listBody = this.state.list.map((user, index) => {
      return (
        <tr key={index}>
          <td>{user.id}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{new Date(user.createTime).toLocaleString()}</td>
        </tr>
      );
    });
    return (
      <div id="page-wrapper">
        <PageTitle title="user list" />
        <TableList tableHeads={['id', 'username', 'email', 'phone', 'create time']}>
          {listBody}
        </TableList>
        <Pagination
          current={this.state.pageNum}
          total={this.state.total}
          onChange={(pageNum) => this._onPageNumChange(pageNum)}
        />
      </div>
    )
  }
}

export default UserList;
