import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Input, Button, Typography } from "antd";
import { ToastContainer } from "react-toastify";

import { addContact } from "../../redux/contacts/operations";
import { showToast } from "../../toastify/toastify";
import { selectContactsList } from "../../redux/contacts/selectors";

import s from "./ContactForm.module.scss";

const { Title, Text } = Typography;

const INITIAL_STATE = {
  name: "",
  number: "",
};

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);

  const [state, setState] = useState(INITIAL_STATE);

  const handleChangeForm = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formName = state.name;
    const formNumber = state.number;
    if (contacts.some(({ name }) => name === formName)) {
      return showToast("info", `${formName} is already in contacts`);
    }
    if (contacts.some(({ number }) => number === formNumber)) {
      return showToast("info", `${formNumber} is already in contacts`);
    }
    if (formName === "") {
      return showToast("error", "Please, enter a name");
    }
    if (formNumber === "") {
      return showToast("error", "Please, enter a number");
    }

    try {
      const newContact = await dispatch(
        addContact({ name: formName, number: formNumber.toString() })
      ).unwrap();
      showToast("success", `You added a contact ${newContact.name}`);
    } catch (error) {
      showToast("info", "Sorry, something's wrong");
    }

    resetForm();
  };

  const resetForm = () => {
    setState(INITIAL_STATE);
  };

  return (
    <>
      <ToastContainer />
      <div className={s.formContainer}>
        <form className={s.form} onSubmit={handleFormSubmit}>
          <Title className={s.title}>Phonebook</Title>
          <Text className={s.text} strong>
            Name
          </Text>

          <Input
            onChange={handleChangeForm}
            value={state.name}
            type="text"
            name="name"
            placeholder="Enter name"
          />
          <Text className={s.text} strong>
            Number
          </Text>

          <Input
            onChange={handleChangeForm}
            type="tel"
            name="number"
            placeholder="Enter phone number"
            value={state.number}
          />

          <Button htmlType="submit" className={s.btn} type="primary" block>
            Add Contact
          </Button>
        </form>
      </div>
    </>
  );
}
