import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.contacts;
export const selectContactToEdit = state => state.contacts.contactToEdit;
export const selectIsError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.loading;

export const selectContactsFilteredMemo = createSelector(
	[selectContacts, selectFilter],
	(contacts, filter) => {
		const filteredContacts = contacts.filter(
			contact =>
				contact.name.toLowerCase().includes(filter.toLowerCase()) ||
				contact.number.toLowerCase().includes(filter.toLowerCase())
		);
		return filteredContacts;
	}
);
