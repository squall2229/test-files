import React from "react"
import { useParams } from "react-router-dom"

import { FileContent } from "../../components/file-content"

export const FilePage = () => {
  const params: { id: string } = useParams()
  return <FileContent id={params.id} />
}
