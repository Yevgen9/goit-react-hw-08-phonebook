import { NavLink } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

import { Typography } from "antd";

import s from "./Navigation.module.scss";

const { Title } = Typography;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={s.nav}>
      <NavLink className={s.homeTitle} to="/">
        <Title level={5}>Home</Title>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={s.contactsTitle} to="/contacts">
          <Title className={s.title} level={5}>
            Contacts
          </Title>
        </NavLink>
      )}
    </nav>
  );
};
