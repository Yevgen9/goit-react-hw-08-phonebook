import PropTypes from "prop-types";

import { useDispatch } from "react-redux";

import { deleteContact } from "../../redux/contacts/operations";
import { showToast } from "../../toastify/toastify";

import { ToastContainer } from "react-toastify";



export const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  


  // const handleDeleteContact = async (userId) => {
  //   try {
  //     const originalPromiseResult = await dispatch(
  //       deleteContact(userId)
  //     ).unwrap();
  //     showToast("success", `${originalPromiseResult.name} You deleted contact`);
  //   } catch (error) {
  //     showToast("info", "Sorry, something's wrong");
  //   }
  // };

  const handleDeleteContact = async (userId) => {
    try {
      const resultAction = await dispatch(deleteContact(userId));
      if (deleteContact.fulfilled.match(resultAction)) {
        showToast(
          "success",
          `${resultAction.payload.name} You deleted contact`
        );
      } else {
        showToast("info", "Sorry, something's wrong");
      }
    } catch (error) {
      showToast("info", "Sorry, something's wrong");
    }
  };

  return (
    <div key={id}>
      <ToastContainer />
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

export default ContactsListItem;
