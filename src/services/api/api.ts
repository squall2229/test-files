import { DirsResponse } from "./types"

export const getApiFiles = (baseUrl: string) => {
  return {
    getFiles: async () => {
      try {
        const response = await fetch(`${baseUrl}?mocky-delay=1000ms`)
        const data: DirsResponse = await response.json()

        return data.dirs
      } catch (error) {
        return new Error(error)
      }
    }
  }
}
