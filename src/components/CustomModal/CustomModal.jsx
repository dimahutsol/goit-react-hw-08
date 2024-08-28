import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: '#DCC7A1',
		padding: '50px',
	},
};

const CustomModal = ({ children, isOpen, closeModal }) => {
	return (
		<Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
			{children}
		</Modal>
	);
};

export default CustomModal;
