import React, { FC } from "react"

type Props = {
  title: string,
  size: string,
  extention?: string
}

export const TooltipInfo: FC<Props> = ({ title, size, extention }) => (
  <div>
    <p>title: {title}</p>
    <p>size: {size}</p>
    {extention && <p>extention: {extention}</p>}
  </div>
)
