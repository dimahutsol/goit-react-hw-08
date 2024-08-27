import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './AuthNav.module.css';

const AuthNav = () => {
	const buildLinkClass = ({ isActive }) => {
		return clsx(s.link, isActive && s.listItemActive);
	};

	return (
		<nav>
			<ul className={clsx(s.list)}>
				<li className={clsx(s.listItem)}>
					<NavLink className={buildLinkClass} to='/registration'>
						Register
					</NavLink>
				</li>
				<li className={clsx(s.listItem)}>
					<NavLink className={buildLinkClass} to='/login'>
						Login
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default AuthNav;
