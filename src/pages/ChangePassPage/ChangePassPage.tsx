import React, { FC } from 'react';
import ChangePassForm from 'components/ChangePassForm/ChangePassForm';
import { useParams } from 'react-router-dom';

const ChangePassPage: FC = () => {
  const { resetToken } = useParams();

  if (!resetToken) return null;
  return <ChangePassForm token={resetToken} />;
};

export default ChangePassPage;
