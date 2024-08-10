import { useState } from 'react';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import { nanoid } from 'nanoid';
import { useLocalStorage } from './hooks/useLocalStorage';

const initialContacts = [
	{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
	{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
	{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
	{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
	const CONTACTS_KEY = 'contacts_key';

	const [contacts, setContacts] = useLocalStorage(
		CONTACTS_KEY,
		initialContacts
	);
	const [filter, setFilter] = useState('');

	const contactsToShow = contacts.filter(item =>
		item.name.toLowerCase().includes(filter.toLowerCase())
	);

	const filterContacts = text => {
		setFilter(text);
	};

	const handleAddContact = contact => {
		setContacts(prev => [...prev, { ...contact, id: nanoid() }]);
	};

	const handleDeleteContact = id => {
		setContacts(prev => prev.filter(item => item.id !== id));
	};

	return (
		<div>
			<h1>Phonebook</h1>
			<ContactForm handleAddContact={handleAddContact} />
			<SearchBox filterContacts={filterContacts} />
			<ContactList
				contacts={contactsToShow}
				handleDeleteContact={handleDeleteContact}
			/>
		</div>
	);
}

export default App;
