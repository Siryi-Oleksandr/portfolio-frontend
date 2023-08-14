import React, { FC, useState } from 'react';
import {
  TriggerWrapper,
  InfoWrapper,
  InfoText,
  TotalUsers,
} from './TotalCountTrigger.styled';

interface Props {
  totalCount: number;
}

const TotalCountTrigger: FC<Props> = ({ totalCount }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <TriggerWrapper>
      <TotalUsers
        onMouseEnter={() => setTimeout(() => setShowInfo(true), 200)}
        onMouseLeave={() => setTimeout(() => setShowInfo(false), 200)}
      >
        {totalCount}
      </TotalUsers>

      <InfoWrapper showInfo={showInfo}>
        <InfoText>Us already:</InfoText>
      </InfoWrapper>
    </TriggerWrapper>
  );
};

export default TotalCountTrigger;
