import { useState } from 'react';

export const usePasswordToggle = () => {
  const [passwordType, setPasswordType] = useState('password');

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
    } else {
      setPasswordType('password');
    }
  };

  return [passwordType, togglePassword] as const;
};
