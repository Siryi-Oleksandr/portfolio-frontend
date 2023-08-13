import { HiArrowLeft } from 'react-icons/hi';
import { FC } from 'react';
import { BackLinkProps } from 'types/backLinkTypes';
import { BackLincAwesome, StyledLink } from './BackLink.styled';

const BackLink: FC<BackLinkProps> = ({ to }) => {
  return (
    <BackLincAwesome type="secondary">
      <StyledLink to={to}>
        <HiArrowLeft />
        Back
      </StyledLink>
    </BackLincAwesome>
  );
};
export default BackLink;
