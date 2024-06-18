import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { useAuth } from "../../hooks/useAuth";

import s from './AppBar.module.scss'

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={s.appBar}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
