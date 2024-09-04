import { useState } from 'react';
import { FormInputsMail, InputTitles } from '../types';

import { passwdValidator } from '../../../services/validator';

import styles from './Input.module.scss';

export const PasswordInput = ({ register, getValue }: FormInputsMail) => {
  const [msq, setMsq] = useState<string>('');
  const [err, setErr] = useState<boolean>(false);

  const updateDataValue = () => {
    const validData = passwdValidator(getValue('pswd'));
    setMsq(validData.message);
    setErr(validData.isError);
  };

  return (
    <>
      <label className={styles.inputLabel}>
        <span>{InputTitles.PASSWORD}</span>
        <input
          className={`${styles.input}  ${err && styles.inputErr}`}
          type="text"
          autoComplete="off"
          {...register('pswd', {
            required: true,
            onChange: () => {
              updateDataValue();
            },
            onBlur: () => {
              updateDataValue();
            },
          })}
        />
        <span className={styles.inputErrorMsq}>{err && msq}</span>
      </label>
    </>
  );
};
