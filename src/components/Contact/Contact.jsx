import css from './Contact.module.css';
import { BsTelephoneFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { Avatar, Button } from '@mui/material';
import { stringAvatar } from '../../utils/utils';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      <div className={css.contactInfo}>
        <div>
          <Avatar {...stringAvatar(name)} />
          <span>{name}</span>
        </div>
        <div className={css.phoneBlock}>
          <BsTelephoneFill className={css.phone} />
          <span>{number}</span>
        </div>
      </div>
      <Button variant="outlined" onClick={() => handleDeleteContact(id)} className={css.btn}>
        Delete
      </Button>
    </>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
