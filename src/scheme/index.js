import * as yup from 'yup';
export const basicSchema = yup.object().shape({
    nickName: yup.string()
    .required('Name is required')
    .matches(/^[a-zA-Z0-9]+$/, 'Only letters and digits are allowed')
    .max(30, 'Name must be at most 30 characters long'),
    name: yup.string()
    .matches(/^[a-zA-Z]+$/, 'Only letters are allowed')
    .max(50, 'Name must be at most 50 characters')
    .required('Name is required'),
    familyName: yup.string()
    .matches(/^[a-zA-Z]+$/, 'Only letters are allowed')
    .max(50, 'Surname must be at most 50 characters')
    .required('Surname is required'),
    textArea:yup.string().required('SomeThing about yourself is required')
    .max(200),
    pol: yup.string().required('Please select a gender').oneOf(['man', 'women'], 'Invalid gender'),

})