// import React from "react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Helmet } from "react-helmet";

// import { fetchContacts } from "redux/constacts/operations";
// import { selectIsLoading } from "redux/constacts/selectors";

// import { ContactForm } from "../../components/ContactForm/ContactForm";
// import { Filter } from "../../components/Filter/Filter";
// import { ContactList } from "../../components/ContactList/ContactList";

// export default function Contacts() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div>
//       <Helmet>
//         <title>Your contacts</title>
//       </Helmet>
//       <ContactForm />
//       <Filter />
//       <div>{isLoading && "Request in progress..."}</div>
//       <ContactList />
//     </div>
//   );
// }

import ContactForm from "../../Components/ContactForm/ContactForm";

export default function Contacts() {
  return (
    <>
      <ContactForm />
      <h1>Здесь должны быть контакты!!!!!!!!!!!!</h1>
    </>
  );
}
