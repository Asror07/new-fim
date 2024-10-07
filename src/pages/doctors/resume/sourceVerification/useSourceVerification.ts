import { Form, message } from 'antd';

const formItems = [
   {
      name: 'primary_source_verification',
      isFile: true,
      message: 'Please, upload the primary source verification file',
      label: 'Primary Source Verification',
   },
];

export default function SourceVerification() {
   const [form] = Form.useForm();

   return { form, formItems };
}
