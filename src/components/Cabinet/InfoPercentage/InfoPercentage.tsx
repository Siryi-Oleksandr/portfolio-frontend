import { FC } from 'react';
import { InfoTrigger } from 'components';
import { IUser } from 'types/userTypes';
import {
  TextWrapper,
  Text,
  Percentage,
  InfoWrapper,
} from './InfoPercentage.styled';

interface Props {
  user: IUser;
}

interface UserObject {
  [key: string]: any;
}

const InfoPercentage: FC<Props> = ({ user }) => {
  const calculateInfoPercentage = (userObj: UserObject) => {
    const totalProperties = Object.keys(userObj).length;
    let filledProperties = 0;

    for (const userKey in userObj) {
      if (
        userKey === '_id' ||
        userKey === 'miniAvatarURL' ||
        userKey === 'avatarURL'
      ) {
        continue;
      }

      const value = userObj[userKey];

      if (value !== null && value !== undefined) {
        if (
          (typeof value === 'string' && value.trim() !== '') ||
          typeof value === 'number' ||
          typeof value === 'boolean' ||
          (Array.isArray(value) && value.length > 0) ||
          (typeof value === 'object' && Object.keys(value).length > 0)
        ) {
          filledProperties += 1;
        }
      }
    }

    const percentage = (filledProperties / (totalProperties - 3)) * 100;
    return percentage.toFixed(0);
  };

  const getEmoji = (percentage: string) => {
    const numericPercentage = +percentage;

    if (numericPercentage === 100) {
      return '😁';
    } else if (numericPercentage >= 70 && numericPercentage < 100) {
      return '🙂';
    } else if (numericPercentage >= 37 && numericPercentage < 70) {
      return '😐';
    } else if (numericPercentage < 37) {
      return '😞';
    }
  };

  const filledPercentage = calculateInfoPercentage(user);
  console.log(filledPercentage);
  const emoji = getEmoji(filledPercentage);
  console.log(emoji);

  return (
    <TextWrapper>
      <Text>
        Filled infromation:{' '}
        <Percentage percentage={filledPercentage}>
          {filledPercentage}%
        </Percentage>{' '}
        {emoji}
        <InfoWrapper>
          <InfoTrigger>
            The percentage of information you have filled in your fields.
          </InfoTrigger>
        </InfoWrapper>
      </Text>
    </TextWrapper>
  );
};

export default InfoPercentage;
