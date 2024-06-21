import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { useAuth } from "../../hooks/useAuth";

import { Helmet } from "react-helmet";

import s from "./AppBar.module.scss";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={s.appBar}>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
