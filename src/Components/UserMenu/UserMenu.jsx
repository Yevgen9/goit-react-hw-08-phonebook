import { useDispatch } from "react-redux";

import { logOut } from "../../redux/auth/operations";
import { useAuth } from "../../hooks/useAuth";

import s from "./UserMenu.module.scss";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleClickLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={s.wrapper}>
      <p className={s.username}>Welcome, {user.name}</p>
      <button type="button" onClick={handleClickLogOut}>
        Logout
      </button>
    </div>
  );
};
