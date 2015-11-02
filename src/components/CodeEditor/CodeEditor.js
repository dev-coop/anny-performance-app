import React, {Component} from 'react';
import 'brace';
import ReactAce from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/tomorrow';

import storage from 'src/modules/storage/Storage';

export default class CodeEditor extends Component {
  componentDidMount() {
    this.editor = this.refs.reactAce.editor;
    this.editor.setValue(storage.get('codeEditorText'));
    this.editor.focus();
    this.editor.moveCursorTo(0, 0);
  }

  onChange = newVal => {
    storage.set('codeEditorText', newVal);
  };

  render() {
    return (
      <ReactAce
        ref="reactAce"
        mode="javascript"
        theme="tomorrow"
        width="100%"
        height="auto"
        onChange={this.onChange}
        editorProps={{$blockScrolling: true}}
        name="code-editor"
      />
    );
  }
}
