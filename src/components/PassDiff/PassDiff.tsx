import { FC, useEffect, useState } from 'react';
import { List, Item, Span } from './PassDiff.styled';

const PassDiff: FC<{ password: string }> = ({ password }) => {
  const [passState, setPassState] = useState('gray');

  // // easy
  // const onlyLetters = /^[a-zA-Z]+$/;
  // const onlyDigits = /^[0-9]+$/;
  // const onlySymbols = /^[!@#$%^&*()_+-=;':"\\|,.<>/?]+$/;
  // // medium
  // const onlyLettersWithBig = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]+$/;
  // const lettersSymbols = /^(?=.*[a-zA-Z])(?=.*[\W_]).+$/;
  // const lettersDigits = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
  // const digitsSymbols = /^(?=.*\d)(?=.*[\W_]).+$/;
  // // strong
  // const all = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
  // const digitsWithBig = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/;
  // const symbolsWithBig = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])[A-Za-z\W_]+$/;

  // const onPasswordChange = (password: string) => {
  //   if (password.length === 0) {
  //     setPassState('gray');
  //     return;
  //   } else if (password.length < 6) {
  //     setPassState('red');
  //   } else if (
  //     all.test(password) ||
  //     digitsWithBig.test(password) ||
  //     symbolsWithBig.test(password)
  //   ) {
  //     setPassState('strong');
  //   } else if (
  //     digitsSymbols.test(password) ||
  //     lettersDigits.test(password) ||
  //     lettersSymbols.test(password) ||
  //     onlyLettersWithBig.test(password)
  //   ) {
  //     setPassState('medium');
  //   } else if (
  //     onlyLetters.test(password) ||
  //     onlyDigits.test(password) ||
  //     onlySymbols.test(password)
  //   ) {
  //     setPassState('weak');
  //   }
  // };

  const checkPasswordStrength = (password: string) => {
    if (!password.trim()) {
      return 'Empty';
    }

    if (/.{6,}/.test(password)) {
      if (/(?=.*[a-z])(?=.*[A-Z])(?=.*[\d!@#$%^&*?]).{8,}/.test(password)) {
        console.log('asd');
        if (
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{10,}$/.test(password)
        ) {
          return setPassState('strong');
        }
        return setPassState('medium');
      }
      return setPassState('weak');
    }
    return setPassState('red');
  };

  useEffect(() => {
    checkPasswordStrength(password);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password]);

  return (
    <>
      <List>
        <Item state={passState}>
          <Span>
            {passState === 'red' ? 'pass' : passState === 'weak' && 'weak'}
          </Span>
        </Item>
        <Item state={passState}>
          <Span>
            {passState === 'red' ? 'too' : passState === 'medium' && 'okay'}
          </Span>
        </Item>
        <Item state={passState}>
          <Span>
            {passState === 'red' ? 'short' : passState === 'strong' && 'strong'}
          </Span>
        </Item>
      </List>
    </>
  );
};

export default PassDiff;
