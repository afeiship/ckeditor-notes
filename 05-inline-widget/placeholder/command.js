import Command from '@ckeditor/ckeditor5-core/src/command';

export default class extends Command {
  execute ({ value }) {
    const editor = this.editor;
    const selection = editor.model.document.selection;

    editor.model.change(writer => {
      // Create a <placeholder> elment with the "name" attribute (and all the selection attributes)...
      const placeholder = writer.createElement('placeholder', {
        name: value
      });

      // ... and insert it into the document.
      editor.model.insertContent(placeholder);

      // Put the selection on the inserted element.
      writer.setSelection(placeholder, 'on');
    });
  }

  refresh () {
    console.log('refresh...');
    const model = this.editor.model;
    const selection = model.document.selection;
    const isAllowed = model.schema.checkChild(selection.focus.parent, 'placeholder');

    console.log(
      selection.focus.parent
    );
    this.isEnabled = isAllowed;
  }
}
