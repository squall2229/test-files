import React, { FC } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { useForm, Controller } from "react-hook-form"

import { getFileContentById, getAllFilesSelector } from "../../store/selectors"
import { Wrapper, Row } from "./styles"
import { changeFiles } from "../../store/actions"

type Props = {
  id: string
}

const useStyles = makeStyles(() => ({
  input: {
    display: "block",
    marginBottom: 10
  },
  cancel: {
    textDecoration: "none"
  }
}));

export const FileContent: FC<Props> = ({ id }) => {
  const fileInfo = useSelector(getFileContentById(id))
  const allFiles = useSelector(getAllFilesSelector)
  const { control, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles()

  const onSubmit = (values: any) => {
    const newFiles = allFiles?.map(file => {
      if (file.id === id) {
        return {
          ...file,
          ...values
        }
      }

      return file
    })
   
    if (newFiles) {
      dispatch(changeFiles(newFiles))
      history.push('/')
    }
  }

  return fileInfo ? (
    <Wrapper onSubmit={(handleSubmit(onSubmit))}>
    <Typography variant="h2" component="h2" gutterBottom>File Edit</Typography>
     <Controller 
      error={errors.title}
      id="standard-error-helper-text"
      helperText="required field"
      rules={{ required: true }} 
      defaultValue={fileInfo.title} 
      as={TextField} 
      control={control} 
      className={classes.input} 
      label="title" 
      name="title" 
    />
     <Controller 
      error={errors.size}
      id="standard-error-helper-text"
      helperText="required field"
      rules={{ required: true }} 
      defaultValue={fileInfo.size} 
      as={TextField} 
      control={control} 
      className={classes.input} 
      label="size" 
      name="size" 
    />
     <Controller 
      error={errors.extension}
      id="standard-error-helper-text"
      helperText="required field"
      rules={{ required: true }} 
      defaultValue={fileInfo.extension} 
      as={TextField} 
      control={control} 
      className={classes.input} 
      label="extension" 
      name="extension"
    />
     <Controller 
      error={errors.extension}
      id="standard-error-helper-text"
      helperText="required field"
      rules={{ required: true }} 
      defaultValue={fileInfo.content} 
      as={TextField} 
      control={control} 
      multiline 
      className={classes.input} 
      label="content" 
      name="content" 
    />
     <Row>
      <Button type="submit" variant="contained" color="primary">Save</Button>
      <Link className={classes.cancel} to="/"><Button variant="contained">Cancel</Button></Link>
     </Row>
    </Wrapper>
  ) : null
}
