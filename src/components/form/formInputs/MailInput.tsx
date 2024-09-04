import { useState } from 'react';

import { mailValidator } from '../../../services/validator';

import { ErrorValues, FormInputsMail, InputTitles } from '../types';

import styles from './Input.module.scss';

export const MailInput = ({
  register,
  getValue,
  setDisabled,
}: FormInputsMail) => {
  const [err, setErr] = useState<boolean>(false);

  const updateMailValue = (): void => {
    const valid: boolean = mailValidator(getValue('email'));
    if (valid) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }

    setErr(!valid);
  };

  return (
    <>
      <label className={styles.inputLabel}>
        <span className={styles.inputTitle}>{InputTitles.EMAIL}</span>
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
