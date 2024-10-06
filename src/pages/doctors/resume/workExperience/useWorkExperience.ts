import { Form } from 'antd';

const formItems = [
   {
      name: 'current_position',
      label: 'Current Position',
      message: 'Please enter your current position',
   },
   {
      name: 'start_date',
      label: 'Start Date',
      message: 'Please select the start date',
      datePicker: true, // Date picker for start date
   },
   {
      name: 'previous_institutions',
      label: 'Previous Institutions (Names)',
      message: 'Please enter the names of previous institutions',
   },
   {
      name: 'start_end_dates_previous_institutions',
      label: 'Start and End Dates at Previous Institutions',
      message: 'Please select the start and end dates at previous institutions',
      datePicker: true, // Date picker for start and end dates
   },
   {
      name: 'professional_memberships',
      label: 'Professional Memberships',
      message: 'Please enter your professional memberships',
   },
];

export default function useWorkExperience() {
   const [form] = Form.useForm();

   return { formItems, form };
}
