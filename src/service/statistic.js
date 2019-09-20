import Util from '../util/util';

const _mm = new Util();

class Statistic {
  getHomeCount() {
    return _mm.request({
      url: '/manage/statistic/base_count.do'
    })
  }
}

export default Statistic;
