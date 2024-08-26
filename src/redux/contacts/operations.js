import { createAsyncThunk } from '@reduxjs/toolkit';
import { goItApi } from '../auth/operations';

export const fetchContacts = createAsyncThunk(
	'contacts/fetchContacts',
	async (_, thunkApi) => {
		try {
			const { data } = await goItApi.get('contacts');
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

export const addContact = createAsyncThunk(
	'contacts/addContact',
	async (contact, thunkApi) => {
		try {
			const { data } = await goItApi.post('contacts', contact);
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

export const deleteContact = createAsyncThunk(
	'contacts/deleteContact ',
	async (id, thunkApi) => {
		try {
			await goItApi.delete(`contacts/${id}`);
			return id;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);
