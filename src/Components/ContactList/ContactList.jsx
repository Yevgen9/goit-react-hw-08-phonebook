import { useSelector } from "react-redux";

import {
  selectContactsFilter,
  selectContactsList,
} from "../../redux/contacts/selectors";

import ContactsListItem from "../ContactListItem/ContactListItem";

export const ContactList = () => {
  const contacts = useSelector(selectContactsList);
  const filter = useSelector(selectContactsFilter);

  const visibleContacts = [
    ...contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    ),
  ];

  return (
    <>
      {visibleContacts?.map(({ name, number, id }) => (
        <ContactsListItem key={id} id={id} name={name} number={number} />
      ))}

      <ContactsListItem />
    </>
  );
};

export default ContactList;
