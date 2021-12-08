import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import Ui from './ui';
import Editing from './editing';

export default class Placeholder extends Plugin {
  static get requires() {
    return [Editing, Ui];
  }

  init() {
    console.log('main init.');
  }
}
