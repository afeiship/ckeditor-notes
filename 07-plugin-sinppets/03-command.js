import Command from '@ckeditor/ckeditor5-core/src/command';

export default class extends Command {
  execute () {
    console.log('execute.');
  }

  refresh () {
    console.log('refresh');
  }
}
