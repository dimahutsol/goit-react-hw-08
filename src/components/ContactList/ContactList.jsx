import clsx from 'clsx';
import s from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';

const ContactList = () => {
	const contacts = useSelector(selectContacts);
	const filter = useSelector(selectFilter);
	const filteredContacts = contacts.filter(contact =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
	);

	return (
		<ul className={clsx(s.list)}>
			{filteredContacts.map(item => (
				<li key={item.id}>
					<Contact item={item} />
				</li>
			))}
		</ul>
	);
};

export default ContactList;
