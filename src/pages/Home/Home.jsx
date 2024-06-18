import s from "./Home.module.scss";

export default function Home() {
  return (
    <div style={s.container}>
      <h1 style={s.stitle}>
        Task manager welcome page
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
}
