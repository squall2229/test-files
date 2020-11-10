import { Action } from "redux"
import { ThunkAction } from 'redux-thunk'

import { actionTypes } from './types'
import { RootState } from './../types'
import { apiFiles } from "../../services/api"

export const getFiles = (): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
  dispatch({ type: actionTypes.GET_FILES })

  try {
    const files = await apiFiles.getFiles()

    dispatch({ type: actionTypes.GET_FILES_SUCCESS, payload: { files } })

  } catch (error) {
    dispatch({ type: actionTypes.GET_FILES_FAIL })
  }
}
