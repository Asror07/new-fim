import { Form } from 'antd';

const formItems = [
   {
      name: 'full_name',
      label: 'Full Name',
      message: 'Please enter your full name',
   },
   {
      name: 'date_of_birth',
      label: 'Date of Birth',
      message: 'Please select your date of birth',
      datePicker: true, // Date picker for date of birth
   },
   {
      name: 'gender',
      label: 'Gender',
      message: 'Please select your gender',
      type: 'dropdown', // Dropdown for gender selection
   },
   {
      name: 'nationality',
      label: 'Nationality',
      message: 'Please select your nationality',
      type: 'dropdown', // Dropdown for nationality
   },
   {
      name: 'phone_number',
      label: 'Phone Number',
      message: 'Please enter your phone number',
      type: 'input', // Input field for phone number
   },
   {
      name: 'email_address',
      label: 'Email Address',
      message: 'Please enter your email address',
      type: 'input', // Input field for email address
   },
   {
      name: 'address',
      label: 'Address',
      message: 'Please enter your address',
      type: 'input', // Input field for address
   },
   {
      name: 'languages_spoken',
      label: 'Languages Spoken',
      message: 'Please select the languages you speak',
      type: 'dropdown', // Dropdown for languages
   },
];
export default function usePatinentPersonalInfo() {
   const [form] = Form.useForm();

   return { form, formItems };
}
