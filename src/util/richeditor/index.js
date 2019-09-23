import React, { Component } from 'react';
import Simditor from 'simditor';
import 'simditor/styles/simditor.scss';

import './index.scss';

class RichEditor extends Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    this.loaderEditor();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.defaultDetil !== nextProps.defaultImage) {
      this.simditor.setValue(nextProps.defaultDetil);
    }
  }

  loaderEditor() {
    let element = this.refs['textarea'];
    this.simditor = new Simditor({
      textarea: $(element),
      defaultValue: this.props.placeholder || '请输入内容',
      upload: {
        url: '/manage/product/richtext_img_upload.do',
        defaultImage: '',
        fileKey: 'upload_file'
      }
    });
    this.bindEditorEvent();
  }

  bindEditorEvent() {
    this.simditor.on('valuechange', e => {
      this.props.onValueChange(this.simditor.getValue());
    })
  }

  render() {
    return (
      <div className="rich-editor">
        <textarea ref="textarea"></textarea>
      </div>
    );
  }
}

export default RichEditor;
