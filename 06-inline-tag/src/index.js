import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import TagUI from './ui';
import TagEditing from './editing';

export default class Tag extends Plugin {
  static get requires () {
    return [TagEditing, TagUI];
  }

  static get pluginName () {
    return 'Tag';
  }
}
