import Joi from 'joi';

const AdminLoginSchema = Joi.object({
  username: Joi.string().required().messages({
    'any.required': 'Istifadeci adı lazimdir.',
    'string.empty': 'Istifadeci adı boş ola bilmez.',
  }),
  password: Joi.string().required().messages({
    'any.required': 'Şifre lazimdir.',
    'string.empty': 'Şifre boş ola bilmez.',
  }),
});
export default AdminLoginSchema;
