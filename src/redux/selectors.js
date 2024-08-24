import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;
export const selectIsError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.loading;

export const selectFilter = state => state.filter.filter;

export const selectContactsFilteredMemo = createSelector(
	[selectContacts, selectFilter],
	(contacts, filter) => {
		const filteredContacts = contacts.filter(contact =>
			contact.name.toLowerCase().includes(filter.toLowerCase())
		);
		return filteredContacts;
	}
);
