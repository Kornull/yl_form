import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { MailInput, PasswordInput } from './formInputs';
import { Loader } from '../loader';
import { Snack } from '../snack';

import { mockUserRequest } from '../../services/mock';

import { StateForm } from 'src/types';
import styles from './Form.module.scss';

const FormComponent = () => {
  const { register, getValues, handleSubmit, reset } = useForm<StateForm>({
    mode: 'onChange',
  });

  const [isViewLoader, setIsViewLoader] = useState<boolean>(false);
  const [isViewSnack, setIsViewSnack] = useState<boolean>(false);
  const [isRequestRan, setIsRequestRan] = useState<boolean>(false);
  const [isMailValid, setIsMailValid] = useState<boolean>(false);
  const [isPswdValid, setIsPswdValid] = useState<boolean>(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>(true);

  const updateDisabledValue = (): void => {
    if (isMailValid && isPswdValid) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  };

  const closeSnack = (): void => {
    setTimeout(() => setIsViewSnack(false), 3000);
  };

  const onSubmit = handleSubmit((data): void => {
    let isAuth: boolean = false;

    setIsViewLoader(true);

    setTimeout(() => {
      isAuth = mockUserRequest({
        email: data.email,
        pswd: data.pswd,
      });
      setIsViewLoader(false);
      if (isAuth) {
        setIsViewSnack(true);
        setIsRequestRan(isAuth);
        closeSnack();
        setIsMailValid(false);
        setIsPswdValid(false);
        reset();
      } else {
        setIsViewSnack(true);
        setIsRequestRan(isAuth);
        closeSnack();
      }
    }, 5500);
  });

  useEffect(() => {
    updateDisabledValue();
  }, [isMailValid, isPswdValid]);

  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <h2 className={styles.formTitle}>Вход</h2>
        <MailInput
          getValue={getValues}
          register={register}
          setDisabled={setIsMailValid}
        />
        <PasswordInput
          register={register}
          getValue={getValues}
          setDisabled={setIsPswdValid}
        />
        <button
          className={styles.formBtn}
          type="submit"
          disabled={isBtnDisabled}
        >
          Войти
        </button>
      </form>
      {isViewLoader && <Loader />}
      {isViewSnack && (
        <Snack isShowSnack={isViewSnack} isRequestFalled={isRequestRan} />
      )}
    </>
  );
};

export default FormComponent;
