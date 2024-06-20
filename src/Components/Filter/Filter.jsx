// import { useDispatch, useSelector } from "react-redux";

// import { Input, Typography } from "antd";

// import { setFilter } from "../../redux/contacts/filterSlice";
// import { selectContactsFilter } from "../../redux/contacts/selectors";

// import s from "./Filter.module.scss";

// const { Title } = Typography;
// export default function Filter() {
//   const dispatch = useDispatch();
//   const filter = useSelector(selectContactsFilter);

//   const handleChangeFilter = ({ currentTarget: { value } }) => {
//     const normalizedValue = value.toLowerCase().trim();
//     dispatch(setFilter(normalizedValue));
//   };

//   return (
//     <div className={s.filterContainer}>
//       <Title level={2}>Contacts</Title>

//       <Input
//         className={s.filterInput}
//         type="text"
//         name="filter"
//         placeholder="Find contact by name"
//         value={filter}
//         onChange={handleChangeFilter}
//       />
//     </div>
//   );
// }

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Input, Typography } from "antd";

import { selectContactsFilter } from "../../redux/contacts/selectors";
import { setFilter } from "../../redux/contacts/filterSlice";

import s from "./Filter.module.scss";

const { Title } = Typography;

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  const handleChangeFilter = ({ currentTarget: { value } }) => {
    const normalizedValue = value.toLowerCase().trim();
    dispatch(setFilter(normalizedValue));
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
        value={filter}
      />
    </div>
  );
};

export default Filter;
