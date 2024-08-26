import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';

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

	const registrationSchema = Yup.object().shape({
		name: Yup.string()
			.trim()
			.min(3, 'Too short!')
			.max(20, 'Too long!')
			.required('The field is required!'),
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
				validationSchema={registrationSchema}>
				<Form>
					<label>
						Name
						<Field name='name' type='text' placeholder='name' />
						<ErrorMessage name='name' component='span' />
					</label>
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
					<button type='submit'>Sign Up</button>
				</Form>
			</Formik>
		</div>
	);
};

export default RegistrationForm;
