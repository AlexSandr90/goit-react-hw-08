import { ContactForm, ContactList, SearchBox } from '../../components';

const ContactsPage = () => {
  return (
    <div>
      <h1>ContactsPage</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
