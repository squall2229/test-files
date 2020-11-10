import React, { FC } from "react"
import { useSelector } from "react-redux"
import Typography from '@material-ui/core/Typography'

import { getFileContentById } from "../../store/selectors"

type Props = {
  currentContent: string
}

export const PreviewContent: FC<Props> = ({ currentContent }) => {
  const fileInfo = useSelector(getFileContentById(currentContent))

  return (
    <div>
      <Typography variant="h2" component="h2" gutterBottom>Preview</Typography>
      <Typography variant="body1" gutterBottom>{fileInfo?.content}</Typography>
    </div>
  )
}
