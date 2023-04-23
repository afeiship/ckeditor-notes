import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Image from '@ckeditor/ckeditor5-image/src/image';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableColumnResize from '@ckeditor/ckeditor5-table/src/tablecolumnresize';
import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import { InsertImage } from './insert-image';

ClassicEditor.create(document.querySelector('#editor'), {
  placeholder: 'Type the content here!',
  plugins: [
    Essentials,
    Paragraph,
    Bold,
    Italic,
    Image,
    Table,
    TableToolbar,
    TableColumnResize,
    TableCaption,
    InsertImage
  ],
  toolbar: ['bold', 'italic', 'insertImage', 'table', 'insertTable'],
  table: {
    // tableProperties: {
    //   // The default styles for tables in the editor.
    //   // They should be synchronized with the content styles.
    //   defaultProperties: {
    //     borderStyle: 'dashed',
    //     borderColor: 'hsl(90, 75%, 60%)',
    //     borderWidth: '3px',
    //     alignment: 'left',
    //     width: '100%',
    //     height: '450px'
    //   },
    //   // The default styles for table cells in the editor.
    //   // They should be synchronized with the content styles.
    //   tableCellProperties: {
    //     defaultProperties: {
    //       horizontalAlignment: 'center',
    //       verticalAlignment: 'bottom',
    //       padding: '10px'
    //     }
    //   }
    // },
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'toggleTableCaption']
  }
})
  .then((editor) => {
    console.log('Editor was initialized', editor);
    window.editor = editor;
  })
  .catch((error) => {
    console.error(error.stack);
  });
