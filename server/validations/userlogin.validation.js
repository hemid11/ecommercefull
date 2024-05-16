import Joi from 'joi';

const UserLoginSchema = Joi.object({
  username: Joi.string().required().messages({
    'any.required': 'istifadeci adi lazimdir.',
    'string.empty': 'Istifadeci adı boş ola bilmez.',
  }),
  email: Joi.string().email().required().messages({
    'any.required': 'E-mail lazimdi.',
    'string.email': 'Email elave edildi',
    'string.empty': 'E-mail bos ola bilmez',
  }),
  password: Joi.string().required().messages({
    'any.required': 'Şifre lazimdir.',
    'string.empty': 'Şifre boş ola bilmez.',
  }),
});

export default UserLoginSchema;
