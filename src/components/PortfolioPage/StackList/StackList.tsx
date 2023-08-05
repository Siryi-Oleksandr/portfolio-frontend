import React, { FC } from 'react';
import { List } from './StackList.styled';
import Stack from '../Stack/Stack';

type Props = {
  techStack: string[];
};

const StackList: FC<Props> = ({ techStack }) => {
  return (
    <section>
      <List>
        {techStack.map((tech, ind) => (
          <Stack key={ind} tech={tech} />
        ))}
      </List>
    </section>
  );
};

export default StackList;
