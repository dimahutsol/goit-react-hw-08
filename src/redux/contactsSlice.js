import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOps';

const initialState = {
	contacts: [],
	loading: false,
	error: null,
};

const slice = createSlice({
	name: 'contacts',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.contacts = action.payload;
			})
			.addCase(addContact.fulfilled, (state, action) => {
				state.contacts.push(action.payload);
			})
			.addCase(deleteContact.fulfilled, (state, action) => {
				state.contacts = state.contacts.filter(
					contact => contact.id !== action.payload
				);
			})
			.addMatcher(
				isAnyOf(
					fetchContacts.fulfilled,
					fetchContacts.rejected,
					addContact.fulfilled,
					addContact.rejected,
					deleteContact.fulfilled,
					deleteContact.rejected
				),
				state => {
					state.loading = false;
				}
			)
			.addMatcher(
				isAnyOf(
					fetchContacts.pending,
					addContact.pending,
					deleteContact.pending
				),
				state => {
					state.loading = true;
					state.error = null;
				}
			)
			.addMatcher(
				isAnyOf(
					fetchContacts.rejected,
					addContact.rejected,
					deleteContact.rejected
				),
				(state, action) => {
					state.error = action.payload;
				}
			);
	},
});

export const contactsReducer = slice.reducer;
