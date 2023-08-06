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
  const calculateInfoPercentage = (userObj: UserObject) => {
    const totalProperties = Object.keys(userObj).length;
    let filledProperties = 0;

    for (const userKey in userObj) {
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

    const percentage = (filledProperties / totalProperties) * 100;
    return percentage.toFixed(0);
  };

  const filledPercentage = calculateInfoPercentage(user);

  return (
    <TextWrapper>
      <Text>
        Filled infromation: <Percentage>{filledPercentage}%</Percentage>
      </Text>
    </TextWrapper>
  );
};

export default InfoPercentage;
