import { useDispatch } from "react-redux";

import { Input, Button, Typography } from "antd";

import { register } from "../../redux/auth/operations";

import s from "./RegisterForm.module.scss";

const { Text } = Typography;

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
          <Text strong>Username:</Text>
          <Input
            className={s.input}
            type="text"
            name="name"
            placeholder="Enter username"
          />
        </label>

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

        <Button
          className={s.logInBtn}
          htmlType="submit"
          size="small"
          type="primary"
        >
          Register
        </Button>
      </form>
    </div>
  );
};
