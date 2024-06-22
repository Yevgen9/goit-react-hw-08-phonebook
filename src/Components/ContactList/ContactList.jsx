import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, Flex, Typography } from "antd";
import { ToastContainer } from "react-toastify";
import { showToast } from "../../toastify/toastify";

import { deleteContact } from "../../redux/contacts/operations";
import { selectContactsList } from "../../redux/contacts/selectors";
import { selectContactsFilter } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";

import s from "../ContactList/ContactList.module.scss";

const { Text } = Typography;

const ContactsList = () => {
  const contacts = useSelector(selectContactsList);
  const filter = useSelector(selectContactsFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
    <div className={s.contactsContainer}>
      <ToastContainer />

      <table className={s.list}>
        <tbody>
          {filteredContacts.map((contact) => (
            <tr key={contact.id} className={s.item}>
              <td className={s.cell}>
                <Text strong>{contact.name} :</Text>
              </td>

              <td className={s.cell}>
                <Text strong>{contact.number}</Text>
              </td>

              <td>
                <Flex gap="small" wrap>
                  <Button
                    onClick={() => handleDeleteContact(contact.id)}
                    size="small"
                    type="primary"
                  >
                    Delete Contact
                  </Button>
                </Flex>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsList;
