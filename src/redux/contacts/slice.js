import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
	addContact,
	deleteContact,
	fetchContacts,
	updateContact,
} from './operations';
import { notifyError, notifySuccess } from '../../helpers/toasts';

const initialState = {
	contacts: [],
	contactToEdit: null,
	loading: false,
	error: null,
};

const slice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		setContactToEdit: (state, action) => {
			state.contactToEdit = action.payload;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.contacts = action.payload;
			})
			.addCase(addContact.fulfilled, (state, action) => {
				state.contacts.push(action.payload);
				notifySuccess();
			})
			.addCase(deleteContact.fulfilled, (state, action) => {
				state.contacts = state.contacts.filter(
					contact => contact.id !== action.payload
				);
				notifySuccess();
			})
			.addCase(updateContact.fulfilled, (state, action) => {
				state.contacts = state.contacts.map(contact =>
					contact.id === state.contactToEdit.id
						? { ...action.payload }
						: contact
				);
				state.contactToEdit = null;
				notifySuccess();
			})
			.addMatcher(
				isAnyOf(
					fetchContacts.fulfilled,
					fetchContacts.rejected,
					addContact.fulfilled,
					addContact.rejected,
					deleteContact.fulfilled,
					deleteContact.rejected,
					updateContact.fulfilled,
					updateContact.rejected
				),
				state => {
					state.loading = false;
				}
			)
			.addMatcher(
				isAnyOf(
					fetchContacts.pending,
					addContact.pending,
					deleteContact.pending,
					updateContact.pending
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
					deleteContact.rejected,
					updateContact.rejected
				),
				(state, action) => {
					state.error = action.payload;
					notifyError();
				}
			);
	},
});

export const { setContactToEdit } = slice.actions;
export const contactsReducer = slice.reducer;
