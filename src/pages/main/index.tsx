import React, { useState } from 'react'

import { Files } from "../../components/files"
import { Wrapper } from "./styles"
import { PreviewContent } from '../../components/preview-content'

export const MainPage = () => {
  const [currentContent, setCurrentContent] = useState("")

  return (
    <Wrapper>
      <Files setCurrentContent={setCurrentContent} />
      <PreviewContent currentContent={currentContent} />
    </Wrapper>
  );
}
