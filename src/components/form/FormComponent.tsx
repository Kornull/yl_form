import { useForm } from 'react-hook-form';

import { MailInput, PasswordInput } from './formInputs';

import { StateForm } from './types';

import './Form.scss';

const FormComponent = () => {
  const { register, getValues, handleSubmit } = useForm<StateForm>({
    mode: 'onBlur',
  });

  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <MailInput getValue={getValues} register={register} />
        <PasswordInput register={register} getValue={getValues} />
        <button type="submit">click</button>
      </form>
    </>
  );
};

export default FormComponent;
