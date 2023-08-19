import styled from '@emotion/styled';
import { theme } from 'theme';

export const List = styled.ul`
  list-style: disc;
  margin-left: 13px;
`;

export const RedSpan = styled.span`
  font-weight: ${theme.fontWeights.heading};
  color: red;
`;

export const OrangeSpan = styled.span`
  font-weight: ${theme.fontWeights.heading};
  color: orange;
`;

export const GreenSpan = styled.span`
  font-weight: ${theme.fontWeights.heading};
  color: green;
`;
