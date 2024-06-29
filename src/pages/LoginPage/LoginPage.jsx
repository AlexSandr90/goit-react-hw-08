import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { Field, Form, Formik } from 'formik';
import { useId } from 'react';

const LoginPage = () => {
  const dispatch = useDispatch();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (value) => {
    dispatch(login(value));
  };
  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={emailId}>Email: </label>
        <Field id={emailId} type="email" name="email" />
        <label htmlFor={passwordId}>Password: </label>
        <Field id={passwordId} type="password" name="password" />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginPage;
