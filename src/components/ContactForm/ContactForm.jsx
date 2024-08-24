import clsx from 'clsx';
import s from './ContactForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

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

	const contactSchema = Yup.object({
		name: Yup.string()
			.min(3, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required'),
		number: Yup.string()
			.matches(/^[0-9- ]*$/, 'Must contain only digits, hyphens, and spaces')
			.min(3, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required'),
	});

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
						Add contact
					</button>
				</Form>
			</Formik>
		</div>
	);
};

export default ContactForm;
