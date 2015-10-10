import * as ActionTypes from './types';

/** Abstract action */
export class Action {
  constructor(type) {
    this.type = type;
  }
}

/**
 * Base file action
 * Вызывается при выборе файла
 */
export class FileAction extends Action {
  constructor(file) {
    super(ActionTypes.FILE_SELECT);
    this.file = file;
  }
}