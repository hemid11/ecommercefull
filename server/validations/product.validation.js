import Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'Ad lazimdir.',
    'string.empty': 'Ad yeri boş ola bilmez.',
  }),
  salePrice: Joi.number().required().min(0).messages({
    'number.base': 'Satış qiymeti bir reqem olmalıdır.',
    'number.min': 'Satış qiymeti en az 0 olmalıdır.',
    'any.required': 'Satış qiymeti lazimdir.',
  }),
  costPrice: Joi.number().required().min(0).messages({
    'number.base': 'Alis qiymeti bir reqem olmalıdır.',
    'number.min': 'Alis qiymeti en az 0 olmalıdır.',
    'any.required': 'Alis qiymeti lazimdir.',
  }),
  imgSrc: Joi.string().uri().required().messages({
    'string.uri': 'Duzgun bir URL daxil edin.',
    'any.required': 'Sekil URL\'si lazimdir.',
    'string.empty': 'Sekil URL\'si boş ola bilmez.',
  }),
  discountPercentage: Joi.number().min(0).max(100).messages({
    'number.base': 'endirim  bir reqem olmalıdır.',
    'number.min': 'endirim en az 0 olmalıdır.',
    'number.max': 'endirim en cox 100 olmalıdır.',
  }),
  description: Joi.string().min(10).required().messages({
    'string.min': 'Aciqlama en az 10 simvol olmalıdır.',
    'any.required': 'Aciqlama  lazimdir.',
    'string.empty': 'Aciqlama alanı boş ola bilmez.',
  }),
  categoryId: Joi.string().required().messages({
    'any.required': 'Kategoriya ID lazimdir.',
    'string.empty': 'Kategoriya ID boş ola bilmez.',
  }),
  stock: Joi.number().required().min(1).messages({
    'number.base': 'Stok sayi bir reqem olmalıdır.',
    'number.min': 'Stok sayi en az 1 olmalıdır.',
    'any.required': 'Stok sayi lazimdir.',
  }),
});

export default productSchema;
