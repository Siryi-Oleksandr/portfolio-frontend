import React, {FC} from 'react'
import { List } from './TagList.styled'
import TagItem from '../TagItem/TagItem'

const TagList: FC = () => {
  return (
    <List>
        <TagItem tagName="HTML" />
        <TagItem tagName="CSS" />
        <TagItem tagName="JavaScript" />
        <TagItem tagName="React" />
        <TagItem tagName="Redux" />
          <TagItem tagName="Next.js" />
    </List>
  )
}

export default TagList