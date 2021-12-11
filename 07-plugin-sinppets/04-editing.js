import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class extends Plugin {
  static get pluginName () {
    return 'TagEditing';
  }

  init () {
    const editor = this.editor;
    console.log('editing..');
  }
}
