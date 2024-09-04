import { useForm } from 'react-hook-form';

import { MailInput, PasswordInput } from './formInputs';

import { Loader } from '../loader';
import { useState } from 'react';
import { Snack } from '../snack';

import { mockUserRequest } from '../../services/mock';

import { StateForm } from 'src/types';
import './Form.scss';

const FormComponent = () => {
  const { register, getValues, handleSubmit, reset } = useForm<StateForm>({
    mode: 'onBlur',
  });

  const [isViewLoader, setIsViewLoader] = useState<boolean>(false);
  const [isViewSnack, setIsViewSnack] = useState<boolean>(false);
  const [isRequestRan, setIsRequestRan] = useState<boolean>(false);

  const closeSnack = () => {
    setTimeout(() => setIsViewSnack(false), 3000);
  };

  const onSubmit = handleSubmit((data) => {
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
        reset();
      } else {
        setIsViewSnack(true);
        setIsRequestRan(isAuth);
        closeSnack();
      }
    }, 5500);
  });
  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <MailInput getValue={getValues} register={register} />
        <PasswordInput register={register} getValue={getValues} />
        <button type="submit">click</button>
      </form>
      {isViewLoader && <Loader />}
      {isViewSnack && (
        <Snack isShowSnack={isViewSnack} isRequestFalled={isRequestRan} />
      )}
    </>
  );
};

export default FormComponent;
