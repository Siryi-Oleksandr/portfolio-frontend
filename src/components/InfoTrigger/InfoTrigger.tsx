import React, { FC, useState } from 'react';
import {
  TriggerWrapper,
  Text,
  InfoWrapper,
  InfoText,
} from './InfoTrigger.styled';

interface Props {
  children?: React.ReactNode;
}

const InfoTrigger: FC<Props> = ({ children }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <TriggerWrapper>
      <Text
        onMouseEnter={() => setTimeout(() => setShowInfo(true), 800)}
        onMouseLeave={() => setTimeout(() => setShowInfo(false), 500)}
      >
        ?
      </Text>

      <InfoWrapper showInfo={showInfo}>
        <InfoText>{children}</InfoText>
      </InfoWrapper>
    </TriggerWrapper>
  );
};

export default InfoTrigger;
