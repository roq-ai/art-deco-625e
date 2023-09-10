import * as yup from 'yup';

export const designValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  gallery_id: yup.string().nullable().required(),
});
