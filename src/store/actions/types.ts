import { Dirs, File } from './../../services/api/types'

export enum actionTypes {
  GET_FILES = "GET_FILES",
  GET_FILES_SUCCESS = "GET_FILES_SUCCESS",
  GET_FILES_FAIL = "GET_FILES_FAIL",

  CHANGE_FILE = "CHANGE_FILE"
}

export interface getFilesAction {
  type: actionTypes.GET_FILES
}

export interface getFilesSuccessAction {
  type: actionTypes.GET_FILES_SUCCESS,
  payload: {
    files: Dirs
  }
}

export interface getFilesFailAction {
  type: actionTypes.GET_FILES_FAIL
}

export interface changeFilesAction {
  type: actionTypes.CHANGE_FILE,
  payload: {
    files: File[]
  }
}

export type FilesActionTypes = getFilesAction | getFilesSuccessAction | getFilesFailAction | changeFilesAction
