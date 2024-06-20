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
//==================================================================================

// import ContactForm from "../../Components/ContactForm/ContactForm";
// import Filter from "../../Components/Filter/Filter";
// import ContactList from "../../Components/ContactList/ContactList";

// export default function Contacts() {
//   return (
//     <>
//       <ContactForm />
//       <Filter />
//       <h1>Здесь должны быть контакты!!!!!!!!!!!!</h1>
//       <ContactList />
//     </>
//   );
// }
//========================================================================================

import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

import { selectIsLoading } from "../../redux/contacts/selectors";
import ContactForm from "../../Components/ContactForm/ContactForm";
import Filter from "../../Components/Filter/Filter";
import ContactList from "../../Components/ContactList/ContactList";

export default function Contacts() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Helmet>
        <title>Your </title>
      </Helmet>
      <ContactForm />
      <Filter />
      {isLoading && <div>Request in progress...</div>}
      <ContactList />
    </>
  );
}
