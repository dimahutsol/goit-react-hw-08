import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import clsx from 'clsx';
import s from './AppBar.module.css';

const AppBar = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	return (
		<header className={clsx(s.header)}>
			<Navigation />
			<span className={clsx(s.logo)}>GoContacts</span>
			{isLoggedIn ? <UserMenu /> : <AuthNav />}
		</header>
	);
};

export default AppBar;
