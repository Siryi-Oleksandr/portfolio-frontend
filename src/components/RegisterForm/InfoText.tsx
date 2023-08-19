import { FC } from 'react';
import { List, RedSpan, OrangeSpan, GreenSpan } from './InfoText.styled';

const InfoText: FC = () => {
  return (
    <>
      <p>This bar shows the difficulty of your password.</p>
      <br />
      <p>
        <RedSpan>Weak</RedSpan> password:
      </p>
      <List>
        <li>At least 6 characters</li>
        <li>Any characters allowed</li>
      </List>
      <br />
      <p>
        <OrangeSpan>Okay</OrangeSpan> password:
      </p>

      <List>
        <li>At least 8 characters</li>
        <li>At least one uppercase letter</li>
        <li>At least one lowercase letter</li>
        <li>At least one digit or special character</li>
      </List>
      <br />
      <p>
        <GreenSpan>Strong</GreenSpan> password:
      </p>

      <List>
        <li>At least 10 characters</li>
        <li>At least one uppercase letter</li>
        <li>At least one lowercase letter</li>
        <li>At least one digit</li>
        <li>At least one special character</li>
      </List>
    </>
  );
};

export default InfoText;
