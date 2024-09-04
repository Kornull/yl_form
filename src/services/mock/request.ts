import { StateForm } from 'src/types';

type MockUserDataType = {
  login: string;
  password: string;
};

export const mockUserRequest = ({ email, pswd }: StateForm): boolean => {
  const mockUserData: MockUserDataType[] = [
    { login: 'ivanov@gmail.ru', password: '12QWqw!@' },
    { login: 'petrov@gmail.ru', password: '34we@#!4W' },
    { login: 'sidorov@gmail.ru', password: '14qwPO!@' },
  ];

  const result = mockUserData.filter(
    (user) => user.login === email && user.password === pswd
  );

  return result.length ? true : false;
};
