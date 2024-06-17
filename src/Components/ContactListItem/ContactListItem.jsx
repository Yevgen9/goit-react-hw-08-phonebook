import PropTypes from "prop-types";

import { useDispatch } from "react-redux";

import { deleteContact } from "redux/constacts/operations";

import { Notify } from "notiflix";

export const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = (userId) => {
    dispatch(deleteContact(userId))
      .unwrap()
      .then((originalPromiseResult) => {
        // Notify.success(
        //   `${originalPromiseResult.name} successfully deleted from contacts`
        // );
      })
      .catch(() => {
        // Notify.failure("Sorry, something's wrong");
      });
  };

  return (
    <div key={id}>
      <p>{name}</p>

      <p>{number}</p>

      <button onClick={() => handleDeleteContact(id)}>Delete</button>
    </div>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
