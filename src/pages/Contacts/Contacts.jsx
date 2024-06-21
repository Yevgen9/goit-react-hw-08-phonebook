// import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

// import { selectIsLoading } from "../../redux/contacts/selectors";
import ContactForm from "../../Components/ContactForm/ContactForm";
import Filter from "../../Components/Filter/Filter";
import ContactList from "../../Components/ContactList/ContactList";


export default function Contacts() {
  // const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Helmet>
        <title>Phone book</title>
      </Helmet>
      <ContactForm />
      <Filter />
      {/* {isLoading && <div>Request in progress...</div>} */}
      <ContactList />
    </>
  );
}
