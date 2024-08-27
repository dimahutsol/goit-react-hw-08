import { useSelector } from 'react-redux';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { selectIsLoading } from '../../redux/auth/selectors';
import Loader from '../../components/Loader/Loader';
import clsx from 'clsx';
import s from './RegistrationPage.module.css';

const RegistrationPage = () => {
	const isLoading = useSelector(selectIsLoading);

	return (
		<div className={clsx(s.wrapper)}>
			{isLoading && <Loader />}
			<RegistrationForm />
		</div>
	);
};

export default RegistrationPage;
