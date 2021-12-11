import Command from '@ckeditor/ckeditor5-core/src/command';

export default class extends Command {
  execute () {
    console.log('LinkCommand Executed', href);
  }

  refresh () {
    const model = this.editor.model;
    const doc = model.document;

    // 将链接关联到到 value
    this.value = doc.selection.getAttribute('linkHref');
    // 根据 editing.js 中定义的 schema 规则来维护按钮的禁用/启用状态
    this.isEnabled = model.schema.checkAttributeInSelection(doc.selection, 'linkHref');
  }
}
