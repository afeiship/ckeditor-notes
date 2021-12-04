import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Image from '@ckeditor/ckeditor5-image/src/image';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import { InsertImage } from './insert-image';

ClassicEditor
  .create(document.querySelector('#editor'), {
    plugins: [Essentials, Paragraph, Bold, Italic, Image, InsertImage],
    toolbar: ['bold', 'italic', 'insertImage']
  })
  .then(editor => {
    console.log('Editor was initialized', editor);
    window.editor = editor;
  })
  .catch(error => {
    console.error(error.stack);
  });
