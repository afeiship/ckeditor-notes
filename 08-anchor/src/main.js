import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import AnchorUI from './ui';
import AnchorEditing from './editing';

export default class Anchor extends Plugin {
  static get requires () {
    return [AnchorEditing, AnchorUI];
  }

  static get pluginName () {
    return 'Tag';
  }
}
