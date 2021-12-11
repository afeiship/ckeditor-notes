import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class extends Plugin {
  static get pluginName () {
    return 'AnchorUI';
  }

  init () {
    const editor = this.editor;
    const t = editor.t;
    this._createToolbarButton();
  }


  _createToolbarButton () {
    const editor = this.editor;
    // COMMAND_NAME__LINK -> 'link'
    const linkCommand = editor.commands.get('link');

    // TOOLBAR_NAME__LINK -> 'ck-link'
    editor.ui.componentFactory.add('ck-link', (locale) => {
      const view = new ButtonView(locale);
      view.set({
        // TOOLBAR_LABEL__LINK -> '超链接'
        label: '超链接',
        tooltip: true,
        class: 'toolbar_button_link'
      });

      view.bind('isEnabled').to(linkCommand, 'isEnabled');
      // 根据 command 的 value 来控制按钮的高亮状态
      view.bind('isOn').to(linkCommand, 'value', (value) => !!value);

      this.listenTo(view, 'execute', () => {
        // 点击按钮的时候打开弹窗
        this._openDialog(linkCommand.value);
      });
      return view;
    });
  }

  // value 为已设置的超链接，作为初始值传给弹窗表单
  _openDialog (value) {
    // 在弹窗中触发命令
    this.editor.execute('link');
  }
}
