import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/operations';
import { setContactToEdit } from '../../redux/contacts/slice';
import { contactSchema } from '../../helpers/validationSchemas';
import clsx from 'clsx';
import s from './EditContactForm.module.css';

const EditContactForm = ({ contact }) => {
	const dispatch = useDispatch();

	const initialValues = {
		name: contact.name,
		number: contact.number,
	};

	const handleSubmit = (values, options) => {
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
						<Field type='text' name='name' />
						<ErrorMessage className={clsx(s.error)} name='name' component='p' />
					</label>
					<label className={clsx(s.label)}>
						<span>Number</span>
						<Field type='text' name='number' />
						<ErrorMessage
							className={clsx(s.error)}
							name='number'
							component='p'
						/>
					</label>
					<button type='submit' className={clsx(s.btn)}>
						Update
					</button>
					<button
						type='button'
						onClick={() => dispatch(setContactToEdit(null))}
						className={clsx(s.btn)}>
						Cancel
					</button>
				</Form>
			</Formik>
		</div>
	);
};

export default EditContactForm;
