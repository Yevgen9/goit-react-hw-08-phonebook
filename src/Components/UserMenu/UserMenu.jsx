import { useDispatch } from "react-redux";

import { logOut } from "../../redux/auth/operations";
import { useAuth } from "../../hooks/useAuth";

import { Button, Flex, Typography } from "antd";

import s from "./UserMenu.module.scss";

const { Title } = Typography;

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleClickLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={s.wrapper}>
      <Title level={5} className={s.userEmail}>
        Welcome, {user.name}
      </Title>
      <Flex gap="small" wrap>
        <Button
          className={s.btnLogOut}
          size="small"
          type="primary"
          onClick={handleClickLogOut}
        >
          Logout
        </Button>
      </Flex>
    </div>
  );
};
