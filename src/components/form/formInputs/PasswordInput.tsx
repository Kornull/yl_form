import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { passwdValidator } from '../../../services/validator';

import { FormInputsMail, InputTitles } from '../types';

import styles from './Input.module.scss';

export const PasswordInput = ({
  register,
  getValue,
  setDisabled,
}: FormInputsMail) => {
  const [msq, setMsq] = useState<string>('');
  const [err, setErr] = useState<boolean>(false);
  const [isViewPswd, setisViewPswd] = useState<boolean>(false);

  const updateDataValue = (): void => {
    const validData = passwdValidator(getValue('pswd'));
    if (!validData.isError) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }

    setMsq(validData.message);
    setErr(validData.isError);
  };

  return (
    <>
      <label className={`${styles.inputLabel} ${styles.inputPassword}`}>
        <span className={styles.inputTitle}>{InputTitles.PASSWORD}</span>
        <input
          className={`${styles.input}  ${err && styles.inputErr} ${styles.inputPasswordFild}`}
          type={isViewPswd ? 'text' : 'password'}
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
        <button
          type="button"
          className={styles.inputPasswordBtn}
          onClick={() => setisViewPswd(!isViewPswd)}
        >
          {isViewPswd ? (
            <AiOutlineEyeInvisible className={styles.inputPasswordBtnIcon} />
          ) : (
            <AiOutlineEye className={styles.inputPasswordBtnIcon} />
          )}
        </button>
        <span className={styles.inputErrorMsq}>{err && msq}</span>
      </label>
    </>
  );
};
