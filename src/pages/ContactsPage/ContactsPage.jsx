import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import { selectIsLoading } from '../../redux/contacts/selectors';
import Loader from '../../components/Loader/Loader';
import Container from '../../components/Container/Container';
import clsx from 'clsx';
import s from './ContactsPage.module.css';

const ContactsPage = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectIsLoading);

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	return (
		<div className={clsx(s.wrapper)}>
			<Container>
				{isLoading && <Loader />}
				<div className={clsx(s.top)}>
					<ContactForm />
					<SearchBox />
				</div>
				<ContactList />
			</Container>
		</div>
	);
};

export default ContactsPage;
