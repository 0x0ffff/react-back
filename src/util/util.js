class Util {
  request (param) {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: param.type || 'get',
        url: param.url || '',
        dataType: param.dataType || 'json',
        data: param.data || null,
        success: res => {
          if (res.status === 0) {
            typeof resolve === 'function' && resolve(res.data, res.msg);
          } else if (res.status === 10) {
            this._doLogin();
          } else {
            typeof reject === 'function' && reject(res.data || res.msg);
          }
        },
        error: err => {
          typeof reject === 'function' && reject(err.statusText);
        }
      });
    });
  }

  _doLogin() {
    window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
  }

  getUrlParam(name) {
    let queryString = window.location.search.split('?')[1] || "";
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let result = queryString.match(reg);

    return result ? decodeURIComponent(result[2]) : null;
  }

  successTips(msg) {
    alert(msg || 'SUCCESS!');
  }

  errorTips(msg) {
    alert(msg || "ERROR!");
  }

  setStorage(name, data) {
    let dataType = typeof data;

    if (dataType === 'object') {
      window.localStorage.setItem(name, JSON.stringify(data));
    } else if (['name', 'string', 'boolen'].includes(dataType)) {
      window.localStorage.setItem(name, data);
    } else {
      alert('error!');
    }
  }

  getStorage(name) {
    let data = window.localStorage.getItem(name);

    if (data) {
      return JSON.parse(data);
    } else {
      return '';
    }
  }

  removeStorage(name) {
    window.localStorage.removeItem(name);
  }
}

export default Util;
