import { useState } from 'react';
import banka from '../../img/QRmono.png';
import {
  DonationBtn,
  DonationLink,
  DonationWrapper,
  LinkWrapper,
} from './DonationMenu.styled';

const DonationMenu = () => {
  const [showDonatain, setShowDonatain] = useState<boolean>(false);

  return (
    <DonationWrapper donat={showDonatain}>
      <DonationBtn
        onClick={() => {
          setShowDonatain(!showDonatain);
        }}
      >
        support developers
      </DonationBtn>
      <LinkWrapper>
        <img src={banka} alt="Monobanka" width="270px" height="317px" />
        <DonationLink
          href="https://send.monobank.ua/jar/5hm2RbSNYT"
          target="blank"
          rel="noreferrer noopener"
        >
          Link to Monobank
        </DonationLink>
      </LinkWrapper>
    </DonationWrapper>
  );
};

export default DonationMenu;
