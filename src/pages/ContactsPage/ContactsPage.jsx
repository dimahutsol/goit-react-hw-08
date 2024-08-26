import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';

const ContactsPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	return (
		<div>
			<SearchBox />
			<ContactForm />
			<ContactList />
		</div>
	);
};

export default ContactsPage;
