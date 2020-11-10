import { Link } from 'react-router-dom'
import styled from "styled-components"

export const ListFiles = styled.ul`
  width: 400px;
`

export const List = styled.ul`
  margin-top: 10px;
`

export const ListItem = styled.li`
  margin-bottom: 30px;
  position: relative;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translateY(-50%);
`

export const ListItemContent = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`
