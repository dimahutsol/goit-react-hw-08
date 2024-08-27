import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { registrationSchema } from '../../helpers/validationSchemas';
import clsx from 'clsx';
import s from './RegistrationForm.module.css';

const RegistrationForm = () => {
	const dispatch = useDispatch();

	const initialValues = {
		name: '',
		email: '',
		password: '',
	};

	const handleSubmit = (values, options) => {
		dispatch(register(values));
		options.resetForm();
	};

	return (
		<div className={clsx(s.wrapper)}>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={registrationSchema}>
				<Form className={clsx(s.form)}>
					<label className={clsx(s.label)}>
						Name:
						<Field className={clsx(s.field)} name='name' type='text' />
						<ErrorMessage
							className={clsx(s.message)}
							name='name'
							component='span'
						/>
					</label>
					<label className={clsx(s.label)}>
						Email:
						<Field className={clsx(s.field)} name='email' type='email' />
						<ErrorMessage
							className={clsx(s.message)}
							name='email'
							component='span'
						/>
					</label>
					<label className={clsx(s.label)}>
						Password:
						<Field className={clsx(s.field)} name='password' type='password' />
						<ErrorMessage
							className={clsx(s.message)}
							name='password'
							component='span'
						/>
					</label>
					<button className={clsx(s.button)} type='submit'>
						Sign Up
					</button>
				</Form>
			</Formik>
		</div>
	);
};

export default RegistrationForm;
