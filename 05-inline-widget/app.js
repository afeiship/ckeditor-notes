import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Placeholder from './placeholder';

ClassicEditor
  .create(document.querySelector('#editor'), {
    plugins: [Essentials, Paragraph, Bold, Italic, Placeholder],
    toolbar: ['bold', 'italic', 'placeholder'],
    placeholderConfig: {
      types: ['date', 'color', 'first name', 'surname']
    }
  })
  .then(editor => {
    console.log('Editor was initialized', editor);
    window.editor = editor;
  })
  .catch(error => {
    console.error(error.stack);
  });
