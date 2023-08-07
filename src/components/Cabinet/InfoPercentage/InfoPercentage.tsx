import { FC } from 'react';
import { IUser } from 'types/userTypes';
import { TextWrapper, Text, Percentage } from './InfoPercentage.styled';

interface Props {
  user: IUser;
}

interface UserObject {
  [key: string]: any;
}

const InfoPercentage: FC<Props> = ({ user }) => {
  console.log(user);
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
    if (percentage === '100') {
      return '😁';
    } else if (percentage >= '71' && percentage < '100') {
      return '🙂';
    } else if (percentage >= '40' && percentage < '71') {
      return '😐';
    } else if (percentage < '40') {
      return '😞';
    }
  };

  const filledPercentage = calculateInfoPercentage(user);
  const emoji = getEmoji(filledPercentage);

  return (
    <TextWrapper>
      <Text>
        Filled infromation:{' '}
        <Percentage percentage={filledPercentage}>
          {filledPercentage}%
        </Percentage>{' '}
        {emoji}
      </Text>
    </TextWrapper>
  );
};

export default InfoPercentage;
