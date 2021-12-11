import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class extends Plugin {
  static get pluginName () {
    return 'AnchorEditing';
  }

  init () {
    const editor = this.editor;
    this._defineSchema();
    this._defineConverters();
  }

  _defineSchema () {
    const schema = this.editor.model.schema;
    schema.extend('$text', {
      // SCHEMA_NAME__LINK -> 'linkHref'
      allowAttributes: 'linkHref'
    });
  }

  _defineConverters () {
    const conversion = this.editor.conversion;
    conversion.for('downcast').attributeToElement({
      model: 'linkHref',
      // attributeToElement 方法中，如果 view 是一个函数，其第一个参数是对应的属性值，在这里就是超链接的 url
      // 实际项目中需要校验 url 的真实性，这里就省略掉了
      view: createLinkElement
    });

    conversion.for('upcast').elementToAttribute({
      view: {
        name: 'a',
        attributes: {
          href: true
        }
      },
      model: {
        key: 'linkHref',
        value: (viewElement) => viewElement.getAttribute('href')
      }
    });
  }
}


function createLinkElement (href, { writer }) {
  return writer.createAttributeElement('a', { href });
}
