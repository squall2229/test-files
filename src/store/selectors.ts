import { File } from './../services/api/types'
import { RootState } from './types'

export const getFilesSelector = (state: RootState) => state.dirs

export const getAllFilesSelector = (state: RootState): File[] | undefined | null => {
  return state.dirs?.dirs[0]?.children[0]?.children
}

export const getFileContentById = (id: string) => (state: RootState): File | undefined | null => {
  const files = getAllFilesSelector(state)
  return files ? files.find(file => file.id === id) : null
}
