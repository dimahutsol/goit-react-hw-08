import toast from 'react-hot-toast';

export const notifySuccess = () =>
	toast.success('Success!', {
		position: 'bottom-center',
		style: {
			borderRadius: '10px',
			background: '#333',
			color: '#fff',
		},
	});
export const notifyError = () =>
	toast.error('Something went wrong...', {
		position: 'bottom-center',
		style: {
			borderRadius: '10px',
			background: '#333',
			color: '#fff',
		},
	});
