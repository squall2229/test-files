import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { actionTypes, FilesActionTypes } from './actions/types'
import { RootState } from "./types"

const initialState: RootState = {
  dirs: {
    loaded: false,
    loading: false,
    dirs: []
  }
}

const reducer = (state: RootState = initialState, action: FilesActionTypes) => {
  switch (action.type) {
    case actionTypes.GET_FILES:
      return {
        ...state,
        dirs: {
          ...state.dirs,
          loading: true,
        }
      }

    case actionTypes.GET_FILES_SUCCESS: 
      return {
        ...state,
        dirs: {
          loaded: true,
          loading: false,
          dirs: action.payload.files
        }
      }

    case actionTypes.GET_FILES_FAIL:
      return {
        ...state,
        dirs: {
          loaded: true,
          loading: false,
          dirs: []
        }
      }

    case actionTypes.CHANGE_FILE:
      const newState = { ...state }
      newState.dirs.dirs[0].children[0].children = action.payload.files

      return newState

    default:
      return state
  }
}

export const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
