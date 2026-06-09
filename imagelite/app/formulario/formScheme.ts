import * as Yup from 'yup'; 

export interface FormProps {
    name: string;
    tags: string;
    file: string | Blob;
}

export const FormScheme: FormProps = {
    name: '',
    tags: '',
    file: ''
}

export const FormValidationSchema = Yup.object().shape({
    name: Yup.string()
             .trim()
             .required('Name is required')
             .max(50, 'Name must be at most 50 characters'),
    tags: Yup.string()
             .trim()
             .required('Tags are required')
             .max(500, 'Tags must be at most 500 characters'),
    file: Yup.mixed<Blob>()
             .required('File is required')
             .test('size', 'File size must be less than 20MB', 
                   (file) => {return file.size <= 20 * 1024 * 1024; 
                 })
             .test('type', 'Accepted file types are JPEG, PNG, GIF', 
                   (file) => {return ['image/jpeg', 'image/png', 'image/gif'].includes(file.type); 
                 })    
});