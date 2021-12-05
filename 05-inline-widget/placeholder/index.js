import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ui from './ui';

export default class Placeholder extends Plugin {
  static get requires () {
    return [ui];
  }
}
