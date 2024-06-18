import { Helmet } from "react-helmet";
import { LoginForm } from "../../Components/LoginForm/LoginForm";

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}