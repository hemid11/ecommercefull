import * as yup from 'yup';

const CategorySchema = yup.object().shape({
  name: yup.string()
    .required('Kategoriya adı lazimdir')
    .matches(/^[A-Za-z]+$/, 'Kategoriya adı ancaq herflerden ibaret olmalidir')

});
export default CategorySchema