import { Form } from 'antd';

const formItems = [
   {
      name: 'full_name',
      label: 'Full Name',
      message: 'Please enter your full name',
   },
   {
      name: 'title',
      label: 'Title',
      message: 'Please select your title',
      type: 'dropdown', // Assuming this is a dropdown
      options: ['Dr', 'Professor', 'Mr', 'Mrs'], // Example options
   },
   {
      name: 'date_of_birth',
      label: 'Date of Birth',
      message: 'Please select your date of birth',
      type: 'date_picker', // Date picker based on your image
   },
   {
      name: 'gender',
      label: 'Gender',
      message: 'Please select your gender',
      type: 'dropdown', // Dropdown for gender selection
      options: ['Male', 'Female', 'Other'],
   },
   {
      name: 'nationality',
      label: 'Nationality',
      message: 'Please select your nationality',
      type: 'dropdown', // Dropdown for nationality
      options: ['Country 1', 'Country 2', 'Country 3'], // Example country list
   },
   {
      name: 'phone_number',
      label: 'Phone Number',
      message: 'Please enter your phone number',
   },
   {
      name: 'email_address',
      label: 'Email Address',
      message: 'Please enter your email address',
   },
   {
      name: 'address',
      label: 'Address',
      message: 'Please enter your address',
   },
   {
      name: 'languages_spoken',
      label: 'Languages Spoken',
      message: 'Please select the languages you speak',
      type: 'dropdown', // Dropdown for languages
      options: ['English', 'Spanish', 'French'], // Example language list
   },
   {
      name: 'linkedin_profile',
      label: 'LinkedIn Profile',
      message: 'Please enter your LinkedIn profile URL',
      type: 'url_input', // For LinkedIn URL input
   },
];

export default function usePersonalInfo() {
   const [form] = Form.useForm();

   return { form, formItems };
}
