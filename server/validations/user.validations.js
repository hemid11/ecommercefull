import Joi from 'joi';

const UsersSchema = Joi.object({
  username: Joi.string().min(3).required().messages({
    'string.min': 'Istifadeci adı en az 3 simvol olmalıdır.',
    'any.required': 'Istifadeci adı lazimdir.',
    'string.empty': 'Istifadeci adı boş ola bilmez.',
  }),
  password: Joi.string().min(5).pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/).required().messages({
    'string.min': 'Şifre en az 5 simvol olmalıdır.',
    'string.pattern.base': 'Şifre en az 1 balaca herf, 1 boyük harf ve 1 reqem olmalidir.',
    'any.required': 'Şifre lazimdir.',
    'string.empty': 'Şifre boş ola bilmez.',
  }),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'any.only': 'Şifreler beraber olmalidi.',
    'any.required': 'Şifre dogrulanmalidir.',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'duzgun bir email  daxil edin.',
    'any.required': 'Email lazimdir.',
    'string.empty': 'Email boş ola bilmez.',
  }),
  profileImg: Joi.string().uri().required().messages({
    'string.uri': ' bir URL daxil edin.',
    'any.required': 'Profil sekli lazimdir.',
    'string.empty': 'Profil sekli boş olamaz.',
  }),
  balance: Joi.number().positive().integer().required().messages({
    'number.positive': 'balans pozitif olmalıdır.',
    'number.integer': 'balans tam reqem olmalıdır.',
    'any.required': 'balans lazimdir.',
  }),
});

export default UsersSchema;
