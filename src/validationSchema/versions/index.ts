import * as yup from 'yup';

export const versionValidationSchema = yup.object().shape({
  version_number: yup.number().integer().required(),
  design_id: yup.string().nullable().required(),
});
