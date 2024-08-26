import { NavLink } from 'react-router-dom';

const AuthNav = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to='/registration'>Register</NavLink>
				</li>
				<li>
					<NavLink to='/login'>Login</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default AuthNav;
