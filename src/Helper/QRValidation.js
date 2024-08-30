import * as Yup from 'yup';

export const urlValidationSchema = Yup.object({
  qr_name: Yup.string().required('QR Code name is required'),
  field_url: Yup.string().url('Invalid URL format').required('URL is required'),
});

