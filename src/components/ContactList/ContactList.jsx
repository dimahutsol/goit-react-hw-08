import clsx from 'clsx';
import s from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, handleDeleteContact }) => {
	return (
		<ul className={clsx(s.list)}>
			{contacts.map(item => (
				<li key={item.id}>
					<Contact item={item} handleDeleteContact={handleDeleteContact} />
				</li>
			))}
		</ul>
	);
};

export default ContactList;
