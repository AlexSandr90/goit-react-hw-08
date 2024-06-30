import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { register } from '../../redux/auth/operations';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values) => {
    dispatch(register(values));
  };
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor={nameId}>Name: </label>
        <Field id={nameId} type="text" name="name" />
        <label htmlFor={emailId}>Email: </label>
        <Field id={emailId} type="email" name="email" />
        <label htmlFor={passwordId}>Password: </label>
        <Field id={passwordId} type="password" name="password" />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
export default RegistrationForm;