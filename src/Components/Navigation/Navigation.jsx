import { NavLink } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

import s from './Navigation.module.scss'

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={s.nav}>
      <NavLink className={s.home} to="/">Home</NavLink>
      {isLoggedIn && <NavLink className={s.contacts} to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
