import React, { FC} from 'react'
import { Item } from './TagItem.styled'

type Props = {
tagName: string,
}

const TagItem: FC<Props> = ({tagName}) =>  {
  return (
    <Item>{tagName}</Item>
  )
}

export default TagItem