import { Typography } from "antd";

import { useAuth } from "../../hooks/useAuth";

import s from "./Home.module.scss";

const { Title } = Typography;

export default function Home() {
  const { isLoggedIn } = useAuth();
  const { user } = useAuth();

  return (
    <div className={s.container}>
      {isLoggedIn ? (
        <Title className={s.title}>
          Welcome to the phonebook manager, <span>{user.name}!!!</span>
          <span className={s.spanIcon} role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </Title>
      ) : (
        <Title className={s.title}>
          Welcome to the phonebook manager
          <span className={s.spanIcon} role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </Title>
      )}

      {/* <Title className={s.title}>
        Welcome to the phonebook manager
        <span className={s.spanIcon} role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Title> */}

      {!isLoggedIn && (
        <Title className={s.titleText} level={4}>
          Register or log in to work
        </Title>
      )}
    </div>
  );
}
