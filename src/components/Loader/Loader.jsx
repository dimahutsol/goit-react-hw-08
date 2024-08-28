import PulseLoader from 'react-spinners/ClipLoader';
import clsx from 'clsx';
import s from './Loader.module.css';

const Loader = () => {
	return (
		<div className={clsx(s.wrapper)}>
			<PulseLoader color='#DCC7A1' size={150} aria-label='Loading Spinner' />
		</div>
	);
};

export default Loader;
