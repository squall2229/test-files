import { File } from './../../services/api/types'
import { actionTypes, changeFilesAction } from './types'

export const changeFiles = (files: File[]): changeFilesAction => {
  return ({ type: actionTypes.CHANGE_FILE, payload: {
    files
  } })
}
