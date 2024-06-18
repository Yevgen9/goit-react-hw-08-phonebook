import { useSelector, useDispatch } from "react-redux";

import { selectContactsList } from "redux/constacts/selectors";
import { addContact } from "redux/constacts/operations";

import { Notify } from "notifyjs";

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formName = e.target.elements.name.value;
    const formNumber = e.target.elements.number.value;
    if (contacts.some(({ name }) => name === formName)) {
      return alert(`${formName} is already in contacts`);
    }

    if (contacts.some(({ number }) => number === formNumber)) {
      return alert(`${formNumber} is already in contacts`);
    }

    dispatch(addContact({ name: formName, number: formNumber.toString() }))
      .unwrap()
      .then((originalPromiseResult) => {
        Notify.success(
          `${originalPromiseResult.name} successfully added to contacts`
        );
      })
      .catch(() => {
        Notify.failure("Sorry, something's wrong");
      });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Name
        <input
          type="text"
          name="name"
          required
          placeholder="Enter name ..."
          value={contacts.name}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          placeholder="Enter number ..."
          value={contacts.number}
        />
      </label>
      <button type="submit">New contact</button>
    </form>
  );
}
