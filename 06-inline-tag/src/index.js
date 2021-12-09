import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import TheCommand from './command';

export default class InlineTag extends Plugin {
  init() {
    const { t, locale, ui, model, conversion, commands } = this.editor;
    commands.add('inline-tag', new TheCommand(this.editor));

    model.schema.register('inline-tag', {
      isInline: true,
      allowWhere: '$text'
    });

    conversion.elementToElement({
      model: 'inline-tag',
      view: {
        name: 'span',
        classes: 'ck-inline-tag'
      }
    });

    ui.componentFactory.add('inline-tag', () => {
      // The button will be an instance of ButtonView.
      const buttonView = new ButtonView(locale);

      buttonView.set({
        label: t('Inline Tag'),
        withText: true,
        tooltip: false
      });

      return buttonView;
    });
  }
}
