import clsx from 'clsx';
import s from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectContactsFilteredMemo } from '../../redux/selectors';

const ContactList = () => {
	const filteredContacts = useSelector(selectContactsFilteredMemo);

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
