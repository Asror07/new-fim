import {
   Col,
   DatePicker,
   Form,
   FormItemProps,
   Input,
   InputProps,
   Select,
} from 'antd';
import { MaskedInput } from 'antd-mask-input';
import { MaskedInputProps } from 'antd-mask-input/build/main/lib/MaskedInput';
import { OTPProps } from 'antd/es/input/OTP';
import { baseFormItemCol } from 'src/constants/form';
import '../form_item.scss';
import FileUploadFormItem from './FileUpload';

type CombinedType = FormItemProps &
   InputProps &
   OTPProps &
   Partial<MaskedInputProps>;

export interface InputFormItemProps extends CombinedType {
   textarea?: boolean;
   password?: boolean;
   otp?: boolean;
   datePicker?: boolean;
   options?: any[];
   col?: number;
   message?: string;
   row?: number;
   isFile?: boolean;
}

function InputFormItem({
   col = baseFormItemCol,
   name,
   label,
   message,
   mask,
   textarea,
   password,
   otp,
   row = 2,
   options,
   datePicker,
   isFile,
   ...rest
}: InputFormItemProps) {
   return (
      <Col span={col}>
         <Form.Item
            name={name}
            label={label}
            rules={[{ required: !!message, message }]}
         >
            {password ? (
               <Input.Password {...rest} />
            ) : otp ? (
               <div className="form-item-input-otp">
                  <Input.OTP {...rest} length={5} />
               </div>
            ) : textarea ? (
               <Input.TextArea rows={row} placeholder={rest.placeholder} />
            ) : datePicker ? (
               <DatePicker />
            ) : isFile ? (
               <FileUploadFormItem />
            ) : mask ? (
               <MaskedInput
                  mask={mask}
                  {...rest}
                  className="form-item-input-mask"
               />
            ) : options ? (
               <Select placeholder={name}>
                  {options?.map((option) => (
                     <Select.Option key={option} value={option}>
                        {option}
                     </Select.Option>
                  ))}
               </Select>
            ) : (
               <Input {...rest} />
            )}
         </Form.Item>
      </Col>
   );
}

export default InputFormItem;
