import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage/Homepage';
import { RestrictedRoute } from './components/RestrictedRoute';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import { PrivateRoute } from './components/PrivateRoute';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import { refreshUser } from './redux/auth/operations';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { selectIsRefreshing } from './redux/auth/selectors';

function App() {
	const dispatch = useDispatch();
	const isRefreshing = useSelector(selectIsRefreshing);
	console.log(isRefreshing);

	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);

	return isRefreshing ? (
		<p>Refreshing user...</p>
	) : (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route
					path='/contacts'
					element={
						<PrivateRoute redirectTo='/login' component={<ContactsPage />} />
					}
				/>
				<Route
					path='/registration'
					element={
						<RestrictedRoute
							redirectTo='/contacts'
							component={<RegistrationPage />}
						/>
					}
				/>
				<Route
					path='/login'
					element={
						<RestrictedRoute redirectTo='/contacts' component={<LoginPage />} />
					}
				/>
			</Route>
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;
