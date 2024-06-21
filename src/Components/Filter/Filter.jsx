import React from "react";
import { useDispatch } from "react-redux";

import { Input, Typography } from "antd";

import { setFilter } from "../../redux/contacts/filterSlice";

import s from "./Filter.module.scss";

const { Title } = Typography;

const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = (e) => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <div className={s.filterContainer}>
      <Title level={2}>Contacts</Title>
      <Input
        className={s.filterInput}
        type="text"
        name="filter"
        onChange={handleChangeFilter}
        placeholder="Find contact by name"
      />
    </div>
  );
};

export default Filter;
