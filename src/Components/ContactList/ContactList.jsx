import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, Flex, Typography } from "antd";
import { ToastContainer } from "react-toastify";
import { showToast } from "../../toastify/toastify";

import { deleteContact } from "../../redux/contacts/operations";
import { selectContactsList } from "../../redux/contacts/selectors";
import { selectContactsFilter } from "../../redux/contacts/selectors";

import s from "../ContactList/ContactList.module.scss";

const { Text } = Typography;

const ContactsList = () => {
  const contacts = useSelector(selectContactsList);
  const filter = useSelector(selectContactsFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name
      .toLocaleLowerCase()
      .includes((filter || "").toLocaleLowerCase().trim())
  );

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
    <div>
      <ToastContainer />

      <ul className={s.list}>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={s.item}>
            <Text strong>{contact.name} :</Text>
            <Text strong>{contact.number}</Text>

            <Flex gap="small" wrap>
              <Button
                onClick={() => handleDeleteContact(contact.id)}
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
    </div>
  );
};

export default ContactsList;
