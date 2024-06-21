import { useDispatch } from "react-redux";

import { logIn } from "../../redux/auth/operations";

import { Input, Button, Typography } from "antd";

import s from "./LoginForm.module.scss";

const { Text } = Typography;

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={s.formContainer}>
      <form onSubmit={handleSubmit} className={s.loginForm} autoComplete="off">
        <label className={s.labelInput}>
          <Text strong>Email:</Text>

          <Input
            className={s.input}
            type="email"
            name="email"
            placeholder="Enter email"
          />
        </label>
        <label className={s.labelInput}>
          <Text strong>Password:</Text>

          <Input
            className={s.input}
            type="password"
            name="password"
            placeholder="Enter password"
          />
        </label>
        <Button className={s.logInBtn} htmlType="submit" size="small" type="primary">
         Log In
        </Button>
      </form>
    </div>
  );
};
