import { Form } from 'antd';

const formItems = [
   {
      name: 'medical_school',
      label: 'Medical School',
      message: 'Please enter your medical school',
   },
   {
      name: 'medical_school_country',
      label: 'Medical School Country',
      message: 'Please select the country of your medical school',
      options: ['Country 1', 'Country 2', 'Country 3'], // Example options for countries
   },
   {
      name: 'medical_degree',
      label: 'Medical Degree',
      message: 'Please enter your medical degree',
   },
   {
      name: 'date_of_medical_degree',
      label: 'Date of Medical Degree',
      message: 'Please select the date of your medical degree',
   },
   {
      name: 'postgraduate_qualifications',
      label: 'Postgraduate Qualifications',
      message: 'Please enter your postgraduate qualifications',
   },
   {
      name: 'year_of_qualifications',
      label: 'Date of Qualifications',
      message: 'Please select the year of your qualifications',
   },
];

export default function useQualifications() {
   const [form] = Form.useForm();

   return { formItems, form };
}
