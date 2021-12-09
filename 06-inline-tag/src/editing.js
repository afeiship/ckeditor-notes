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
    editor.model.schema.setAttributeProperties('tag', {
      isFormatting: true,
      copyOnEnter: true
    });

    editor.conversion.attributeToElement({
      model: 'tag',
      view: {
        name: 'span',
        classes: 'ck-tag'
      }
    });

    // Create italic command.
    editor.commands.add('tag', new AttributeCommand(editor, 'tag'));

    // Set the Ctrl+I keystroke.
    editor.keystrokes.set('CTRL+K', 'tag');
  }
}
