import { Form } from 'antd';

const formItems = [
   {
      name: 'passport_copy',
      label: 'Passport Copy (Upload)',
      message: 'Please upload your passport copy',
      isFile: true, // File upload for passport copy
   },
   {
      name: 'medical_license',
      label: 'Medical License (Upload)',
      message: 'Please upload your medical license',
      isFile: true, // File upload for medical license
   },
   {
      name: 'country_of_medical_license',
      label: 'Country of Medical License',
      message: 'Please select your country of medical license',
      options: ['Country 1', 'Country 2', 'Country 3'], // Example options for countries
   },
   {
      name: 'emirates_id',
      label: 'Emirates ID (if applicable)',
      message: 'Please upload your Emirates ID (if applicable)',
      isFile: true, // File upload for Emirates ID
   },
];

export default function useDocuments() {
   const [form] = Form.useForm();

   return { formItems, form };
}
