import clsx from 'clsx';
import s from './SearchBox.module.css';

const SearchBox = ({ filterContacts }) => {
	return (
		<div className={clsx(s.wrapper)}>
			<p className={clsx(s.text)}>Find contacts by name</p>
			<input
				className={clsx(s.input)}
				type='text'
				onChange={e => filterContacts(e.target.value)}
			/>
		</div>
	);
};

export default SearchBox;
