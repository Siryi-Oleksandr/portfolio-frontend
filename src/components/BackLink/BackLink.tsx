import { HiArrowLeft } from "react-icons/hi";
import { FC } from "react";
import { BackLinkProps } from "types/backLinkTypes"; 
import { StyledLink } from "./BackLink.styled";

const BackLink: FC<BackLinkProps> = ({to}) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      Back
    </StyledLink>
  );
};
export default BackLink;
