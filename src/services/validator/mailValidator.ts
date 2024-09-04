export const mailValidator = (mail: string) => {
  const REG_EX_EMAIL =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  return REG_EX_EMAIL.test(mail);
};
