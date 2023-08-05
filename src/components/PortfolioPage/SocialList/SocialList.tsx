import React, { FC } from 'react';
import { List } from './SocialList.styled';
import { SocialLink } from 'components';
import { useViewportWidth } from 'hooks/useViewportWidth';
import { IUser } from 'types/userTypes';

type TSize = '1em' | '1.5em' | '2em';

type Props = {
  user: Partial<IUser>;
};

const SocialList: FC<Props> = ({ user }) => {
  const { gitHubURL, linkedinURL, telegram } = user;
  let viewportWidth = useViewportWidth();
  let size: TSize = '1.5em';

  if (viewportWidth > 768) {
    size = '2em';
  }

  return (
    <List>
      {telegram && <SocialLink type="telegram" url={telegram} size={size} />}
      {gitHubURL && <SocialLink type="github" url={gitHubURL} size={size} />}
      {linkedinURL && (
        <SocialLink type="linkedin" url={linkedinURL} size={size} />
      )}
    </List>
  );
};

export default SocialList;
