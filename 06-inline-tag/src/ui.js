import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class extends Plugin {
  static get pluginName () {
    return 'TagUI';
  }

  init () {
    const editor = this.editor;
    const t = editor.t;

    // Add bold button to feature components.
    editor.ui.componentFactory.add('tag', locale => {
      const command = editor.commands.get('tag');
      const view = new ButtonView(locale);

      view.set({
        label: t('Tag'),
        keystroke: 'CTRL+K',
        // tooltip: true,
        withText: true,
        // isToggleable: true
      });

      view.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

      // Execute command.
      this.listenTo(view, 'execute', () => {
        editor.execute('tag');
        editor.editing.view.focus();
      });

      return view;
    });
  }
}
