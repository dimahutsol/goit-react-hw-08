import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaUser, FaPhone } from 'react-icons/fa6';
import { deleteContact } from '../../redux/contacts/operations';
import { setContactToEdit } from '../../redux/contacts/slice';
import { selectContactToEdit } from '../../redux/contacts/selectors';
import CustomModal from '../CustomModal/CustomModal';
import EditContactForm from '../EditContactForm/EditContactForm';
import clsx from 'clsx';
import s from './Contact.module.css';

const Contact = ({ item }) => {
	const [isEditingModalOpen, setIsEditingModalOpen] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

	const dispatch = useDispatch();
	const contactToEdit = useSelector(selectContactToEdit);

	const openEditingModal = () => {
		setIsEditingModalOpen(true);
	};

	const closeEditingModal = () => {
		dispatch(setContactToEdit(null));
	};

	const handleEditClick = item => {
		dispatch(setContactToEdit(item));
		openEditingModal();
	};

	const openDeleteModal = () => {
		setIsDeleteModalOpen(true);
	};

	const closeDeleteModal = () => {
		setIsDeleteModalOpen(false);
	};

	const handleDeleteConfirmClick = () => {
		dispatch(deleteContact(item.id));
		closeDeleteModal();
	};

	useEffect(() => {
		if (contactToEdit === null) {
			return setIsEditingModalOpen(false);
		}

		openEditingModal();
	}, [contactToEdit]);

	return (
		<>
			<div className={clsx(s.item)}>
				<div className={clsx(s.mainPart)}>
					<div className={clsx(s.line)}>
						<span className={clsx(s.icon)}>
							<FaUser />
						</span>
						<p className={clsx(s.text)}>{item.name}</p>
					</div>
					<div className={clsx(s.line)}>
						<span className={clsx(s.icon)}>
							<FaPhone />
						</span>
						<p className={clsx(s.text)}>{item.number}</p>
					</div>
				</div>
				<div className={clsx(s.bts)}>
					<button className={clsx(s.btn)} onClick={() => handleEditClick(item)}>
						Edit
					</button>
					<button className={clsx(s.btn)} onClick={() => openDeleteModal()}>
						Delete
					</button>
				</div>
			</div>

			<CustomModal isOpen={isEditingModalOpen} closeModal={closeEditingModal}>
				<EditContactForm contact={contactToEdit ?? { name: '', number: '' }} />
			</CustomModal>

			<CustomModal isOpen={isDeleteModalOpen} closeModal={closeDeleteModal}>
				<div>
					<p>Please, confirm deleting</p>
					<button type='button' onClick={handleDeleteConfirmClick}>
						Confirm
					</button>
					<button type='button' onClick={() => closeDeleteModal()}>
						Cancel
					</button>
				</div>
			</CustomModal>
		</>
	);
};

export default Contact;
