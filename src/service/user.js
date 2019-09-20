import Util from '../util/util';

const _mm = new Util();

class User {
  login(loginInfo) {
    return _mm.request({
      type: 'post',
      url: '/manage/user/login.do',
      data: loginInfo
    });
  }

  checkLoginInfo(loginInfo) {
    let username = loginInfo.username.trim();
    let password = loginInfo.password.trim();
    
    // console.log(password, username)
    if (typeof username !== 'string' || username.length === 0) {
      return {
        status: false,
        msg: 'username is not null'
      }
    }
    if (typeof password !== 'string' || password.length === 0) {
      return {
        status: false,
        msg: 'password is not null'
      }
    }
    return {
      status: true,
      msg: 'SUCCESS'
    }
  }

  logout() {
    return _mm.request({
      type: 'post',
      url: '/user/logout.do'
    });
  }

  getUserList(pageNum) {
    return _mm.request({
      type: 'post',
      url: '/manage/user/list.do',
      data: {
        pageNum: pageNum
      }
    });
  }
}

export default User;
