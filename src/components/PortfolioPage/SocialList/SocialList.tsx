import React, { FC } from 'react';
import { List } from './SocialList.styled';
import { SocialLink } from 'components';
import { useViewportWidth } from 'hooks/useViewportWidth';

type TSize = '1em' | '1.5em' | '2em';

const SocialList: FC = () => {
  let viewportWidth = useViewportWidth();
  let size: TSize = '1.5em';

  if (viewportWidth > 768) {
    size = '2em';
  }

  return (
    <List>
      <SocialLink
        type="telegram"
        url="https://web.telegram.org/k/"
        size={size}
      />
      <SocialLink type="github" url="https://github.com/" size={size} />
      <SocialLink type="linkedin" url="https://www.linkedin.com/" size={size} />
    </List>
  );
};

export default SocialList;
