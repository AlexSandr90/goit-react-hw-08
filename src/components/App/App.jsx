import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../../redux/auth/operations';
import { Route, Routes } from 'react-router-dom';
import { Layout, RestrictedRoute } from '../index';
import {
  HomePage,
  LoginPage,
  ContactsPage,
  RegistrationPage,
} from '../../pages';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<RegistrationPage />}
              redirectTo="/contacts"
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={
            <RestrictedRoute component={<ContactsPage />} redirectTo="/login" />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;

// useEffect(() => {
//   dispatch(fetchContacts());
// }, [dispatch]);

// return (
//   <>
//     <h1>Phonebook</h1>
//     <ContactForm />
//     <SearchBox />
//     <ContactList />
//   </>
// );
