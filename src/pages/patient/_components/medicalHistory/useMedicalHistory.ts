import { Form } from 'antd';

const formItems = [
   {
      name: 'Previous medications conditions and Suffered',
      label: 'Previous medications conditions',
      message: 'Please describe your previous medications, conditions.',
      type: 'textarea',
      rows: 3, // Assuming 3 rows for the textarea input field
   },
];
export default function usePatinentMedicalHistory() {
   const [form] = Form.useForm();

   return { form, formItems };
}
