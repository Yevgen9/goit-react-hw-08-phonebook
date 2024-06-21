import { Typography } from "antd";

import s from "./Home.module.scss";

const { Title } = Typography;

export default function Home() {
  return (
    <div className={s.container}>
      <Title className={s.title}>
        Welcome to the phonebook manager
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Title>

      <Title className={s.titleText} level={4}>
        Register or log in to work
      </Title>
    </div>
  );
}
