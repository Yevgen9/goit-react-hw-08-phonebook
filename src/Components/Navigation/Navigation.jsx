import { NavLink } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

import { Typography } from "antd";

import s from "./Navigation.module.scss";

const { Title } = Typography;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={s.nav}>
      <NavLink className={s.home} to="/">
        <Title className={s.homeTitle} level={5}>
          Home
        </Title>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={s.contacts} to="/contacts">
          <Title className={s.contactsTitle} level={5}>
            Contacts
          </Title>
        </NavLink>
      )}
    </nav>
  );
};
