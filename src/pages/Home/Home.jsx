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
      {/* <h1 style={s.title}>
        Welcome to the phonebook manager
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1> */}
      {/* <h2>Register or log in to work</h2> */}
      <Title className={s.titleText} level={4}>
        Register or log in to work
      </Title>
    </div>
  );
}
