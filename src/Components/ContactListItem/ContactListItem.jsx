import { useDispatch, useSelector } from "react-redux";

import { ToastContainer } from "react-toastify";
import { Button, Flex, Typography } from "antd";

import { showToast } from "../../toastify/toastify";
import { deleteContact } from "../../redux/contacts/operations";
import { selectContactsList } from "../../redux/contacts/selectors";

import s from "./ContactListItem.module.scss";

const { Text } = Typography;

export const ContactsListItem = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContactsList);

  const handleDeleteContact = async (contactId) => {
    try {
      const originalPromiseResult = await dispatch(
        deleteContact(contactId)
      ).unwrap();
      showToast(
        "success",
        `You deleted contact  ${originalPromiseResult.name} `
      );
    } catch (error) {
      showToast("info", "Sorry, something's wrong");
    }
  };

  return (
    <>
      <ToastContainer />
      <ul className={s.list}>
        {contacts?.map(({ id, name, number }) => (
          <li key={id} className={s.item}>
            <Text strong>{name} :</Text>

            <div className={s.numberText}>
              <Text strong>{number}</Text>
            </div>

            <Flex gap="small" wrap>
              <Button
                onClick={() => handleDeleteContact(id)}
                size="small"
                type="primary"
                className={s.btnDel}
              >
                Delete Contact
              </Button>
            </Flex>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactsListItem;
