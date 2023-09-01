import React, { FC, useState } from 'react';
import {
  TriggerWrapper,
  Text,
  InfoWrapper,
  InfoText,
} from './InfoTriggerPerecentage.styled';

interface Props {
  children?: React.ReactNode;
}

const InfoTriggerPercentage: FC<Props> = ({ children }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <TriggerWrapper>
      <Text
        onMouseEnter={() => setTimeout(() => setShowInfo(true), 400)}
        onMouseLeave={() => setTimeout(() => setShowInfo(false), 400)}
      >
        ?
      </Text>

      <InfoWrapper showInfo={showInfo}>
        <InfoText>{children}</InfoText>
      </InfoWrapper>
    </TriggerWrapper>
  );
};

export default InfoTriggerPercentage;
