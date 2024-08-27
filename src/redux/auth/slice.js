import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './operations';
import { notifySuccess } from '../../helpers/toasts';

const initialState = {
	user: {
		name: null,
		email: null,
	},
	token: null,
	isLoggedIn: false,
	isRefreshing: false,
	isLoading: false,
	isError: false,
};

const slice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(register.fulfilled, (state, action) => {
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isLoggedIn = true;
				notifySuccess();
			})
			.addCase(login.fulfilled, (state, action) => {
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isLoggedIn = true;
				notifySuccess();
			})
			.addCase(logout.fulfilled, () => {
				return initialState;
			})
			.addCase(refreshUser.fulfilled, (state, action) => {
				state.user = action.payload;
				state.isLoggedIn = true;
				state.isRefreshing = false;
			})
			.addCase(refreshUser.pending, state => {
				state.isRefreshing = true;
			})
			.addCase(refreshUser.rejected, state => {
				state.isRefreshing = false;
			})
			.addMatcher(
				isAnyOf(
					register.fulfilled,
					register.rejected,
					login.fulfilled,
					login.rejected,
					logout.fulfilled,
					logout.rejected,
					refreshUser.fulfilled,
					refreshUser.rejected
				),
				state => {
					state.isLoading = false;
				}
			)
			.addMatcher(
				isAnyOf(
					register.rejected,
					login.rejected,
					logout.rejected,
					refreshUser.rejected
				),
				state => {
					state.isError = true;
				}
			)
			.addMatcher(
				isAnyOf(
					register.pending,
					login.pending,
					logout.pending,
					refreshUser.pending
				),
				state => {
					state.isLoading = true;
				}
			);
	},
});

export const authReducer = slice.reducer;
