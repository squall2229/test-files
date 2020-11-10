import React, { FC } from "react"
import { useSelector } from "react-redux"
import FolderIcon from '@material-ui/icons/Folder'
import DescriptionIcon from '@material-ui/icons/Description'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'

import { getFilesSelector } from "../../store/selectors"
import { ListFiles, List, ListItem, ListItemContent, StyledLink } from "./styles"
import { TooltipInfo } from "../tooltip"
import { Button } from "@material-ui/core"

type Props = {
  setCurrentContent: (currentContentId: string) => void
}

export const Files: FC<Props> = ({ setCurrentContent }) => {
  const { loading, dirs } = useSelector(getFilesSelector)

  const handleChangeCurrentContentId = (id: string) => {
    setCurrentContent(id)
  }

  return (
    <div>
    <Typography variant="h2" component="h2" gutterBottom>Files</Typography>
    <ListFiles>
       {loading && <p>Loading...</p>}
       {dirs && dirs.map((dir, index) => {
         return (
            <ListItem key={index}>
              <Tooltip title={<TooltipInfo size={dir.size} title={dir.title} />}>
                <ListItemContent>
                {dir.children ? <FolderIcon /> : <DescriptionIcon />}
                {dir.title}
                </ListItemContent>
              </Tooltip>
              {dir.children && dir.children.map((subDir, subIndex) => {
                return (
                  <List key={subIndex}>
                    <ListItem>
                      <Tooltip title={<TooltipInfo size={subDir.size} title={subDir.title} />}>
                        <ListItemContent>
                        {subDir.children ? <FolderIcon /> : <DescriptionIcon />}
                        {subDir.title}
                        </ListItemContent>
                      </Tooltip>
                      {subDir.children && 
                        (<List>
                          {subDir.children.map((file) => {
                            return (
                              <ListItem key={file.id}>
                                <Tooltip title={<TooltipInfo extention={file.extension} size={file.size} title={file.title} />}>
                               
                                  <ListItemContent onClick={() => handleChangeCurrentContentId(file.id)}>
                                  <DescriptionIcon />
                                  {file.title}
                                  </ListItemContent>
                                </Tooltip>
                                <StyledLink to={`/${file.id}`}>
                                  <Button variant="contained">edit</Button>
                                </StyledLink>
                              </ListItem>
                            )
                          })}
                        </List>)
                      }
                    </ListItem>
                  </List >
                )
              })}
            </ListItem>
         )
       })}
    </ListFiles>
    </div>
  )
}
