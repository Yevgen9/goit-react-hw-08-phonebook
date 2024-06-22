import { NavLink } from "react-router-dom";

import { Typography } from "antd";

import s from "./AuthNav.module.scss";

const { Title } = Typography;

export const AuthNav = () => {
  return (
    <div className={s.authNav}>
      <NavLink className={s.register} to="/register">
        <Title className={s.registerTitle} level={5}>
          Register
        </Title>
      </NavLink>
      <NavLink className={s.login} to="/login">
        <Title className={s.logInTitle} level={5}>
          Log In
        </Title>
      </NavLink>
    </div>
  );
};
