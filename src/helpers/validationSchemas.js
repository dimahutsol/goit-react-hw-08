import * as Yup from 'yup';

export const contactSchema = Yup.object({
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

export const loginSchema = Yup.object().shape({
	email: Yup.string().trim().email().required('The field is required!'),
	password: Yup.string()
		.trim()
		.min(3, 'Too short!')
		.max(20, 'Too long!')
		.required('The field is required!'),
});

export const registrationSchema = Yup.object().shape({
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
