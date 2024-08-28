import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/operations';
import { contactSchema } from '../../helpers/validationSchemas';
import clsx from 'clsx';
import s from './EditContactForm.module.css';

const EditContactForm = ({ contact, closeModal, onUpdate }) => {
	const dispatch = useDispatch();

	const initialValues = {
		name: contact.name,
		number: contact.number,
	};

	const handleSubmit = (values, options) => {
		onUpdate();
		dispatch(updateContact({ ...values, id: contact.id }));
		options.resetForm();
	};

	return (
		<div>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={contactSchema}>
				<Form className={clsx(s.form)}>
					<label className={clsx(s.label)}>
						<span>Name</span>
						<Field className={clsx(s.field)} type='text' name='name' />
						<ErrorMessage
							className={clsx(s.message)}
							name='name'
							component='p'
						/>
					</label>
					<label className={clsx(s.label)}>
						<span>Number</span>
						<Field className={clsx(s.field)} type='text' name='number' />
						<ErrorMessage
							className={clsx(s.message)}
							name='number'
							component='p'
						/>
					</label>
					<div className={clsx(s.modalBts)}>
						<button type='submit' className={clsx(s.button)}>
							Update
						</button>
						<button
							type='button'
							onClick={() => closeModal()}
							className={clsx(s.button)}>
							Cancel
						</button>
					</div>
				</Form>
			</Formik>
		</div>
	);
};

export default EditContactForm;
