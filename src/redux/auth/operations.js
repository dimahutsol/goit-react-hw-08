import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const goItApi = axios.create({
	baseURL: 'https://connections-api.goit.global/',
});

const setAuthHeader = token => {
	goItApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
	goItApi.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
	'auth/register',
	async (credentials, thunkApi) => {
		try {
			const { data } = await goItApi.post('users/signup', credentials);
			setAuthHeader(data.token);
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	},
	{
		condition: (_, thunkApi) => {
			const isLoading = thunkApi.getState().auth.isLoading;
			if (isLoading) {
				return false;
			}
		},
	}
);

export const login = createAsyncThunk(
	'auth/login',
	async (credentials, thunkApi) => {
		try {
			const { data } = await goItApi.post('users/login', credentials);
			setAuthHeader(data.token);
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	},
	{
		condition: (_, thunkApi) => {
			const isLoading = thunkApi.getState().auth.isLoading;
			if (isLoading) {
				return false;
			}
		},
	}
);

export const logout = createAsyncThunk(
	'auth/logout',
	async (_, thunkApi) => {
		try {
			await goItApi.post('users/logout');
			clearAuthHeader();
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	},
	{
		condition: (_, thunkApi) => {
			const isLoading = thunkApi.getState().auth.isLoading;
			if (isLoading) {
				return false;
			}
		},
	}
);

export const refreshUser = createAsyncThunk(
	'auth/refresh',
	async (_, thunkApi) => {
		const persistedToken = thunkApi.getState().auth.token;

		if (persistedToken === null) {
			return thunkApi.rejectWithValue('Unable to fetch user');
		}

		try {
			setAuthHeader(persistedToken);
			const { data } = await goItApi.get('users/current');
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);
