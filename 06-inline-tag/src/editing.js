import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import AttributeCommand from '@ckeditor/ckeditor5-basic-styles/src/attributecommand';

export default class extends Plugin {
  static get pluginName () {
    return 'TagEditing';
  }

  init () {
    const editor = this.editor;

    // Allow italic attribute on text nodes.
    editor.model.schema.extend('$text', { allowAttributes: 'tag' });

    editor.conversion.attributeToElement({
      model: {
        key: 'tag',
        name: '$text',
      },
      view: {
        name: 'span',
        classes: 'ck-tag'
      }
    });


    // Create italic command.
    editor.commands.add('tag', new AttributeCommand(editor, 'tag'));

    // Set the Ctrl+K keystroke.
    editor.keystrokes.set('CTRL+K', 'tag');
  }
}
