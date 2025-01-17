import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter, selectNumberFilter } from '../filters/selectors';

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter, selectNumberFilter],
  (contacts, nameFilter, numberFilter) => {
    if (!Array.isArray(contacts)) {
      return [];
    }

    return contacts.filter(({ name, number }) => {
      const nameMatches = name.toLowerCase().includes(nameFilter.toLowerCase());
      const numberMatches = number
        .toLowerCase()
        .includes(numberFilter.toLowerCase());
      return nameMatches && numberMatches;
    });
  }
);
