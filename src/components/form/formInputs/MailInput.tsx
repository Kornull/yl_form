import { useState } from 'react';
import { ErrorValues, FormInputsMail, InputTitles } from '../types';

import { mailValidator } from '../../../services/validator';

import styles from './Input.module.scss';

export const MailInput = ({ register, getValue }: FormInputsMail) => {
  const [err, setErr] = useState<boolean>(false);

  const updateMailValue = () => {
    const valid = mailValidator(getValue('email'));
    setErr(valid);
  };
  return (
    <>
      <label className={styles.inputLabel}>
        <span>{InputTitles.EMAIL}</span>
        <input
          className={`${styles.input} ${err && styles.inputErr}`}
          type="text"
          autoComplete="off"
          {...register('email', {
            required: true,
            onChange: () => {
              updateMailValue();
            },
            onBlur: () => {
              updateMailValue();
            },
          })}
        />
        <span className={styles.inputErrorMsq}>{err && ErrorValues.EMAIL}</span>
      </label>
    </>
  );
};
