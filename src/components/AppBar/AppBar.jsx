import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const getClassName = ({ isActive }) => clsx(css.link, isActive && css.active);

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink className={getClassName} to="/">
        Home
      </NavLink>
      <NavLink className={getClassName} to="/register">
        Register
      </NavLink>
      <NavLink className={getClassName} to="/login">
        Login
      </NavLink>
      <NavLink className={getClassName} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
};

export default AppBar;
