import { UseFormGetValues, UseFormRegister } from 'react-hook-form';

import { StateForm } from 'src/types';

export type FormInputsMail = {
  register: UseFormRegister<StateForm>;
  getValue: UseFormGetValues<StateForm>;
};

export enum InputTitles {
  'LOGIN' = 'Логин',
  'PASSWORD' = 'Пароль',
  'EMAIL' = 'Почта',
}
export enum ErrorValues {
  'PASSWORD' = 'Пароль',
  'EMAIL' = 'Некорректный адрес',
}
