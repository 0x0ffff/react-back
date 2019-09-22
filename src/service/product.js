import Util from '../util/util';

const _mm = new Util();

class Product {
  getProductList(listParam) {
    let url = '',
    data = {};

    if (listParam.listType === 'list') {
      url = '/manage/product/list.do';
      data.pageNum = listParam.pageNum;
    } else if (listParam.listType === 'search') {
      url = '/manage/product/search.do';
      data.pageNum = listParam.pageNum;
      data[listParam.searchType] = listParam.keyword;
    }

    return _mm.request({
      type: 'post',
      url: url,
      data: data
    });
  }

  getProduct(productId) {
    return _mm.request({
      type: 'post',
      url: '/manage/product/detail.do',
      data: {
        productId: productId || 0
      }
    });
  }

  setProductStatus(productInfo) {
    return _mm.request({
      type: 'post',
      url: '/manage/product/set_sale_status.do',
      data: productInfo
    });
  }

  checkProduct(product) {
    let result = {
      status: true,
      msg: 'success'
    }

    if (typeof product.name !== 'string' || product.name.length === 0) {
      return {
        status: false,
        msg: 'product is not null!'
      }
    }

    if (typeof product.subtitle !== 'string' || product.subtitle.length === 0) {
      return {
        status: false,
        msg: 'product desc is not null'
      }
    }

    if (typeof product.categoryId !== 'number' || !(product.categoryId > 0)) {
      return {
        status: false,
        msg: 'pleace select product category'
      }
    }

    if (typeof product.price !== 'number' || !(product.price >= 0)) {
      return {
        status: false,
        msg: 'pleace select product price'
      }
    }

    if (typeof product.stock !== 'number' || !(product.stock >= 0)) {
      return {
        status: false,
        msg: 'pleace select product stock'
      }
    }

    return result;
  }

  saveProduct(product) {
    return _mm.request({
      type: 'post',
      url: '/manage/product/save.do',
      data: product
    });
  }

  getCategoryList(parentCategoryId) {
    return _mm.request({
      type: 'post',
      url: '/manage/category/get_category.do',
      data: {
        categoryId: parentCategoryId || 0
      }
    });
  }

  saveCategory(category) {
    return _mm.request({
      type: 'post',
      url: '/manage/category/add_category.do',
      data: category
    });
  }

  updateCategoryName(category){
    return _mm.request({
      type: 'post',
      url: '/manage/category/set_category_name.do',
      data: category
    });
  }
}

export default Product;
