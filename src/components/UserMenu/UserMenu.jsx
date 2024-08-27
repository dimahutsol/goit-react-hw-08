import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import clsx from 'clsx';
import s from './UserMenu.module.css';

const UserMenu = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);

	return (
		<div className={clsx(s.wrapper)}>
			<p className={clsx(s.text)}>
				Welcome, <span className={clsx(s.name)}>{user?.name}</span>.
			</p>
			<button
				className={clsx(s.button)}
				type='button'
				onClick={() => dispatch(logout())}>
				Logout
			</button>
		</div>
	);
};

export default UserMenu;
