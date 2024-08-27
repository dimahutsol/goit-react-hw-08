import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { contactSchema } from '../../helpers/validationSchemas';
import clsx from 'clsx';
import s from './ContactForm.module.css';

const ContactForm = () => {
	const dispatch = useDispatch();

	const initialValues = {
		name: '',
		number: '',
	};

	const handleSubmit = (values, options) => {
		dispatch(addContact(values));
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
						<span>Name:</span>
						<Field className={clsx(s.field)} type='text' name='name' />
						<ErrorMessage
							className={clsx(s.message)}
							name='name'
							component='p'
						/>
					</label>
					<label className={clsx(s.label)}>
						<span>Number:</span>
						<Field className={clsx(s.field)} type='text' name='number' />
						<ErrorMessage
							className={clsx(s.message)}
							name='number'
							component='p'
						/>
					</label>
					<button type='submit' className={clsx(s.button)}>
						Add contact
					</button>
				</Form>
			</Formik>
		</div>
	);
};

export default ContactForm;
