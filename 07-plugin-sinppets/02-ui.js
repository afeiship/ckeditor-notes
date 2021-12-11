import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class extends Plugin {
  static get pluginName () {
    return 'TagUI';
  }

  init () {
    const editor = this.editor;
    const t = editor.t;

    // Add bold button to feature components.
    editor.ui.componentFactory.add('tag', locale => {

    });
  }
}
