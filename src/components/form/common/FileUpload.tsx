import { Button, Col, Form, message, Upload } from 'antd';
import { FormItemProps, UploadProps } from 'antd/lib';
import { DocumentUpload } from 'iconsax-react';
import { CustomButton } from 'src/components/common';
import { baseFormItemCol } from 'src/constants/form';
import { themeColors } from 'src/constants/theme';

const props: UploadProps = {
   name: 'file',
   action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
   headers: {
      authorization: 'authorization-text',
   },
   onChange(info) {
      if (info.file.status !== 'uploading') {
         console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
         message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
         message.error(`${info.file.name} file upload failed.`);
      }
   },
};

type Props = UploadProps &
   FormItemProps & {
      col?: number;
      message?: string;
      label?: string;
   };

export default function FileUpload() {
   return (
      <Upload {...props}>
         <CustomButton
            type="primary"
            icon={<DocumentUpload size="24" color={themeColors.dark.white} />}
         >
            Click to Upload
         </CustomButton>
      </Upload>
   );
}
