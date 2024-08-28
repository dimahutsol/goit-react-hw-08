import { useState } from 'react';
import { useSelector } from 'react-redux';
import Switch from '@mui/material/Switch';
import Contact from '../Contact/Contact';
import { selectContactsFilteredMemo } from '../../redux/contacts/selectors';
import clsx from 'clsx';
import s from './ContactList.module.css';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const ContactList = () => {
	const [isSorted, setIsSorted] = useState(false);

	const filteredContacts = useSelector(selectContactsFilteredMemo);
	const filteredSortedContacts = filteredContacts.toSorted((a, b) => {
		if (a.name < b.name) return -1;
		if (a.name > b.name) return 1;
		return 0;
	});

	const contactsToRender = isSorted ? filteredSortedContacts : filteredContacts;

	return (
		<>
			<form>
				<label className={clsx(s.label)}>
					Sort by name
					<Switch
						className={clsx(s.switch)}
						{...label}
						checked={isSorted}
						color='warning'
						onChange={() => setIsSorted(prev => !prev)}
					/>
				</label>
			</form>
			<ul className={clsx(s.list)}>
				{contactsToRender.map(item => (
					<li key={item.id}>
						<Contact item={item} />
					</li>
				))}
			</ul>
		</>
	);
};

export default ContactList;
