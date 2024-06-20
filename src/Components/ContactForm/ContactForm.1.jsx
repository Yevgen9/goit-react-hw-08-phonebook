import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "antd";
import { Button } from "antd";
import { ToastContainer } from "react-toastify";
import { addContact } from "../../redux/contacts/operations";
import { showToast } from "../../toastify/toastify";
import { selectContactsList } from "../../redux/contacts/selectors";
import s from "./ContactForm.module.scss";

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);

  // const [form, setForm] = useState(INITIAL_STATE);
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formName = e.target.elements.name.value;
    const formNumber = e.target.elements.number.value;
    if (contacts.some(({ name }) => name === formName)) {
      return showToast("info", `${formName}  is already in contacts`);
    }
    if (contacts.some(({ number }) => number === formNumber)) {
      return showToast("info", `${formNumber}  is already in contacts`);
    }
    if (formName === "") {
      return showToast("error", "Please, enter a name");
    }
    if (formNumber === "") {
      return showToast("error", "Please, enter a number");
    }

    try {
      const originalPromiseResult = await dispatch(
        addContact({ name: formName, number: formNumber.toString() })
      ).unwrap();
      showToast(
        "success",
        `You added a contact  <<${originalPromiseResult.name} `
      );
    } catch (error) {
      showToast("info", "Sorry, something's wrong");
    }

    form.reset();

    // setForm(INITIAL_STATE);
    return;
  };

  return (
    <div className={s.formContainer}>
      <ToastContainer />

      <form className={s.form} onSubmit={handleFormSubmit}>
        <Title className={s.title}>Phonebook</Title>
        <Text className={s.text} strong>
          Name
        </Text>

        <Input
          value={contacts.name}
          // onChange={handleChangeForm}
          type="text"
          name="name"
          placeholder="Enter name"
        />
        <Text className={s.text} strong>
          Number
        </Text>

        <Input
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={contacts.phone}
        />

        <Button htmlType="submit" className={s.btn} type="primary" block>
          Add Contact
        </Button>
      </form>
    </div>
  );
}
