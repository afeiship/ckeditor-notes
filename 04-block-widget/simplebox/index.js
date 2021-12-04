// simplebox/simplebox.js

import SimpleBoxEditing from './editing';
import SimpleBoxUI from './ui';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class SimpleBox extends Plugin {
  static get requires () {
    return [SimpleBoxEditing, SimpleBoxUI];
  }
}
