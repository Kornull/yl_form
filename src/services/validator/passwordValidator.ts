import { ValidDataType } from 'src/types';

export const passwdValidator = (password: string): ValidDataType => {
  const REGEXP_PASSWORD_VALID_CHARACTERS = /^[\w!@+#%({}\[\]\\/)=$^<>&*-]{8,}$/;

  const REGEXP_SPECIAL_CHARACTERS = /[!@_+#%({}\[\]\\/)=$^<>&*-]/;

  if (password.length < 8) {
    return {
      isError: true,
      message: 'Минимум 8 символов',
    };
  }

  if (!REGEXP_PASSWORD_VALID_CHARACTERS.test(password)) {
    return {
      isError: true,
      message: 'Содержит неверный символ',
    };
  }

  if (!new RegExp(/\d/).test(password)) {
    return {
      isError: true,
      message: 'Минимум одна цифра',
    };
  }

  if (!new RegExp(/[a-z]/).test(password)) {
    return {
      isError: true,
      message: 'Минимум одна прописная букву',
    };
  }

  if (!new RegExp(/[A-Z]/).test(password)) {
    return {
      isError: true,
      message: 'Минимум одна  строчная буква',
    };
  }

  if (!REGEXP_SPECIAL_CHARACTERS.test(password)) {
    return {
      isError: true,
      message: 'Минимум один специальный символ',
    };
  }

  return { isError: false, message: '' };
};
