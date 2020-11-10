import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { Route } from "react-router-dom"

import { getFiles } from './store/actions/get-files'
import { MainPage } from "./pages/main"
import { GlobalStyle } from "./styles"
import { FilePage } from './pages/file'

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFiles())
  })

  return (
    <div>
      <GlobalStyle />
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Route path="/:id" children={<FilePage />} />
    </div>
  );
}
