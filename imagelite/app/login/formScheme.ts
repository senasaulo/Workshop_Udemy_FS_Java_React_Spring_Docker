import * as Yup from 'yup'

export interface LoginForm{
    name?: string;
    email: string;
    password: string; 
    passwordMatch?: string;
}

export const validationScheme = Yup.object().shape({
    name: Yup.string().required('Name is required').max(70,'max 70 characters'),
    email: Yup.string().trim().required('Email is required').email('Invalid Email'),
    password:  Yup.string().required('Password is required').min(8,'Password must have at least 8 characters!'),
    passwordMatch: Yup.string().oneOf([Yup.ref('password')], 'Password must match!')

})

export const formScheme: LoginForm = {
    name: 'user',
    email: '',
    password: '', 
    passwordMatch: ''
}

