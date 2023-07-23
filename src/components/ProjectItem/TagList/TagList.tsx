import React, { FC } from 'react';
import { List } from './TagList.styled';
import TagItem from '../TagItem/TagItem';

type Props = {
  tags: Array<string>
}

const TagList: FC<Props> = ({tags}) => {
  return (
    <List>
      { tags.map(tag => <TagItem tagName={tag.toUpperCase()} /> )}
      {/* <TagItem tagName="HTML" />
      <TagItem tagName="CSS" />
      <TagItem tagName="JavaScript" />
      <TagItem tagName="React" />
      <TagItem tagName="Redux" />
      <TagItem tagName="Next.js" /> */}
    </List>
  );
};

export default TagList;
