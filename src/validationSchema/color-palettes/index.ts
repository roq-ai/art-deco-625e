import * as yup from 'yup';

export const colorPaletteValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  gallery_id: yup.string().nullable().required(),
});
