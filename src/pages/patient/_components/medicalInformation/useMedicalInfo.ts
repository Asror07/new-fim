import { Form } from 'antd';

const formItems = [
   {
      name: 'medical_conditions',
      label: 'Medical Conditions',
      message: 'Please enter your medical conditions',
      type: 'textarea', // Assuming this is a textarea input
   },
   {
      name: 'Allergies',
      label: 'Allergies',
      message: 'Please enter your allergies',
      type: 'textarea', // Assuming this is a textarea input
   },
   {
      name: 'medications',
      label: 'Medications',
      message: 'Please enter your medications',
      type: 'input', // Assuming this is a textarea input
   },
];
export default function usePatinentMedicalInfo() {
   const [form] = Form.useForm();

   return { form, formItems };
}
