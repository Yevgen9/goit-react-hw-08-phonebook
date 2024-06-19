import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Input } from "antd";
import { Button, Typography } from "antd";
import { ToastContainer } from "react-toastify";

import { addContact } from "../../redux/contacts/operations";
import { showToast } from "../../toastify/toastify";
import { selectContactsList } from "../../redux/contacts/selectors";

import s from "./ContactForm.module.scss";

// const INITIAL_STATE = {
//   name: "",
//   number: "",
// };

const { Title, Text } = Typography;

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

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
      showToast("success", `${originalPromiseResult.name} You added a contact`);
    } catch (error) {
      showToast("info", "Sorry, something's wrong");
    }

    // form.reset();
    setName("");
    setNumber("");
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
          // onChange={handleChangeForm}
        />

        <Button htmlType="submit" className={s.btn} type="primary" block>
          Add Contact
        </Button>
      </form>
    </div>
  );
}
