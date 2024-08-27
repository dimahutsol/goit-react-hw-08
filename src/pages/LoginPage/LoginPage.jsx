import { useSelector } from 'react-redux';
import LoginForm from '../../components/LoginForm/LoginForm';
import Loader from '../../components/Loader/Loader';
import { selectIsLoading } from '../../redux/auth/selectors';

const LoginPage = () => {
	const isLoading = useSelector(selectIsLoading);

	return (
		<div>
			{isLoading && <Loader />}
			<LoginForm />
		</div>
	);
};

export default LoginPage;
