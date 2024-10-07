import { Form } from 'antd';

const formItems = [
   {
      name: 'publications',
      label: 'Publications (if applicable)',
      message: 'Please enter the URL of your publication',
   },
   {
      name: 'publications_date',
      label: 'Publications Date',
      message: 'Please select the publication date',
      datePicker: true, // Date picker for publication date
   },
   {
      name: 'research',
      label: 'Research (if applicable)',
      message: 'Please enter the URL of your research',
   },
   {
      name: 'research_date',
      label: 'Research Date',
      message: 'Please select the research date',
      datePicker: true, // Date picker for research date
   },
];

export default function useTeachingExperience() {
   const [form] = Form.useForm();

   return { formItems, form };
}
