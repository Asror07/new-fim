import { Form } from 'antd';

const formItems = [
   {
      name: 'medical_license_number',
      label: 'Medical License Number',
      message: 'Please enter your medical license number',
   },
   {
      name: 'country_of_medical_license',
      label: 'Country of Medical License',
      message: 'Please select your country of medical license',
      options: ['Country 1', 'Country 2', 'Country 3'], // Example options for countries
   },
   {
      name: 'specialty',
      label: 'Specialty',
      message: 'Please select your specialty',
      options: ['Specialty 1', 'Specialty 2', 'Specialty 3'], // Example options for specialties
   },
   {
      name: 'years_of_experience_specialist',
      label: 'Years of Experience as Specialist',
      message: 'Please enter the number of years you have as a specialist',
   },
   {
      name: 'subspecialty',
      label: 'Subspecialty (if applicable)',
      message: 'Please enter your subspecialty',
   },
   {
      name: 'years_of_experience_subspecialty',
      label: 'Years of Experience in Subspecialty',
      message: 'Please enter the number of years you have in your subspecialty',
   },
];

export default function useProfessionalInfo() {
   const [form] = Form.useForm();

   return { formItems, form };
}
