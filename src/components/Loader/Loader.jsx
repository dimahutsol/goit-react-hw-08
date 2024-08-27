import PulseLoader from 'react-spinners/ClipLoader';

const Loader = () => {
	return (
		<div>
			<PulseLoader color='red' size={150} aria-label='Loading Spinner' />
		</div>
	);
};

export default Loader;
