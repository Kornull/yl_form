import { UseFormGetValues, UseFormRegister } from 'react-hook-form';

import { StateForm } from 'src/types';

export type FormInputsMail = {
  register: UseFormRegister<StateForm>;
  getValue: UseFormGetValues<StateForm>;
  setDisabled: (s: boolean) => void;
};

export enum InputTitles {
  'PASSWORD' = 'Пароль',
  'EMAIL' = 'Почта',
}
export enum ErrorValues {
  'EMAIL' = 'Некорректный адрес',
}
