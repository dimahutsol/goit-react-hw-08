import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { login } from '../../redux/auth/operations';

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

	const loginSchema = Yup.object().shape({
		email: Yup.string().trim().email().required('The field is required!'),
		password: Yup.string()
			.trim()
			.min(3, 'Too short!')
			.max(20, 'Too long!')
			.required('The field is required!'),
	});

	return (
		<div>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={loginSchema}>
				<Form>
					<label>
						Email
						<Field name='email' type='email' placeholder='email' />
						<ErrorMessage name='email' component='span' />
					</label>
					<label>
						Password
						<Field name='password' type='password' placeholder='password' />
						<ErrorMessage name='password' component='span' />
					</label>
					<button type='submit'>Log in</button>
				</Form>
			</Formik>
		</div>
	);
};

export default LoginForm;
