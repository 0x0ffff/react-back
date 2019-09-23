import React, { Component } from 'react';

class ListSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchType: 'productId',
      searchKeyword: ''
    };
  }

  _onValueChange(e) {
    let name = e.target.name,
    value = e.target.value.trim();
    this.setState({
      [name]: value
    });
  }

  _onSearch() {
    this.props.onSearch(this.state.searchType, this.state.searchKeyword);
  }

  _onSearchKeywordKeyUp(e) {
    if (e.keyCode === 13) {
      this._onSearch();
    }
  }

  render() {
    return (
      <div className="row search-wrap">
        <div className="col-md-12">
          <div className="form-inline">
            <div className="form-group">
              <select
                className="form-control"
                name="searchType"
                onChange={(e) => this._onValueChange(e)}
              >
                <option>ID search</option>
                <option>Name search</option>
              </select>
            </div>
            <div className="form-group">
              <input 
                className="form-control"
                placeholder="keyword"
                name="searchKeyword"
                onKeyUp={(e) => this._onSearchKeywordKeyUp(e)}
                onChange={(e) => this._onValueChange(e)}
              />
            </div>
            <button className="btn btn-primary" onClick={(e) => this._onSearch(e)}>
              Search
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ListSearch;
