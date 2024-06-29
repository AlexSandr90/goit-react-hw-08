import { combineSlices } from '@reduxjs/toolkit';
import authReducer from './auth/slice';
import filtersReducer from './filters/slice';
import contactsReducer from './contacts/slice';

export const rootReducer = combineSlices({
  contacts: contactsReducer,
  filters: filtersReducer,
  auth: authReducer,
});
