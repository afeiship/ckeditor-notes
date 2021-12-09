import Command from '@ckeditor/ckeditor5-core/src/command';

export default class extends Command {
  execute() {
    this.editor.model.change(writer => {
      // Insert <simpleBox>*</simpleBox> at the current selection position
      // in a way that will result in creating a valid model structure.
      this.editor.model.insertContent(createView(writer));
    });
  }

  refresh() {
    const model = this.editor.model;
    const selection = model.document.selection;
    const allowedIn = model.schema.findAllowedParent(selection.getFirstPosition(), 'inline-tag');
    this.isEnabled = allowedIn !== null;
  }
}


function createView(writer) {
  const child = document.getSelection().toString();
  const el = writer.createElement('inline-tag', {}, child);
  return el;
}
