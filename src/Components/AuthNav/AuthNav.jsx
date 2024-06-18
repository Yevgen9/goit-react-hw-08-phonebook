import { NavLink } from "react-router-dom";

import s from './AuthNav.module.scss'

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={s.register} to="/register">Register</NavLink>
      <NavLink className={s.login} to="/login">Log In</NavLink>
    </div>
  );
};
