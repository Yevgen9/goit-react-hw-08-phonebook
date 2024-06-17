import { useDispatch, useSelector } from "react-redux";

import { setContactsFilter } from "../../redux/contacts/filterSlice";
import { selectContactsFilter } from "../../redux/contacts/selectors";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  const handleChangeFilter = ({ currentTarget: { value } }) => {
    const normalizedValue = value.toLowerCase().trim();
    dispatch(setContactsFilter(normalizedValue));
  };

  return (
    <label>
      <input
        type="text"
        name="filter"
        placeholder="Enter contact name"
        value={filter}
        onChange={handleChangeFilter}
      />
    </label>
  );
};
