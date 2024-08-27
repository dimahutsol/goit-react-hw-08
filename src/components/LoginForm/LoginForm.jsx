import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { loginSchema } from '../../helpers/validationSchemas';
import clsx from 'clsx';
import s from './LoginForm.module.css';

const LoginForm = () => {
	const dispatch = useDispatch();

	const initialValues = {
		email: '',
		password: '',
	};

	const handleSubmit = (values, options) => {
		dispatch(login(values));
		options.resetForm();
	};

	return (
		<div className={clsx(s.wrapper)}>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={loginSchema}>
				<Form className={clsx(s.form)}>
					<label className={clsx(s.label)}>
						Email
						<Field className={clsx(s.field)} name='email' type='email' />
						<ErrorMessage
							className={clsx(s.message)}
							name='email'
							component='span'
						/>
					</label>
					<label className={clsx(s.label)}>
						Password
						<Field className={clsx(s.field)} name='password' type='password' />
						<ErrorMessage
							className={clsx(s.message)}
							name='password'
							component='span'
						/>
					</label>
					<button className={clsx(s.button)} type='submit'>
						Log in
					</button>
				</Form>
			</Formik>
		</div>
	);
};

export default LoginForm;
