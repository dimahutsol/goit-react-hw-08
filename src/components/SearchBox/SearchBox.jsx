import clsx from 'clsx';
import s from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectFilter } from '../../redux/selectors';

const SearchBox = () => {
	const filter = useSelector(selectFilter);
	const dispatch = useDispatch();

	return (
		<div className={clsx(s.wrapper)}>
			<p className={clsx(s.text)}>Find contacts by name</p>
			<input
				className={clsx(s.input)}
				type='text'
				value={filter}
				onChange={e => dispatch(changeFilter(e.target.value))}
			/>
		</div>
	);
};

export default SearchBox;
