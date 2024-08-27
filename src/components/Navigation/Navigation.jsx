import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import clsx from 'clsx';
import s from './Navigation.module.css';

const Navigation = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	const buildLinkClass = ({ isActive }) => {
		return clsx(s.link, isActive && s.listItemActive);
	};

	return (
		<nav>
			<ul className={clsx(s.list)}>
				<li className={clsx(s.listItem)}>
					<NavLink className={buildLinkClass} to='/'>
						Home
					</NavLink>
				</li>
				{isLoggedIn && (
					<li className={clsx(s.listItem)}>
						<NavLink className={buildLinkClass} to='/contacts'>
							Contacts
						</NavLink>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Navigation;
