import { CheckboxProps, Col, Form, FormItemProps } from 'antd';
import { useTypedSelector } from 'src/app/store';
import { CustomCheckbox } from 'src/components/common';
import { baseFormItemCol } from 'src/constants/form';

type CombinedType = FormItemProps & CheckboxProps;

export interface Props extends CombinedType {
   col?: number;
   message?: string;
}

function CheckboxFormItem({
   col = baseFormItemCol,
   name,
   label,
   message,
   ...rest
}: Props) {
   const { colors } = useTypedSelector((state) => state.layout);

   return (
      <Col span={col}>
         <Form.Item
            name={name}
            rules={!!message ? [{ required: true, message }] : []}
            valuePropName="checked"
         >
            <CustomCheckbox
               style={{ width: '100%', color: colors.white_08 }}
               {...rest}
            >
               {label}
            </CustomCheckbox>
         </Form.Item>
      </Col>
   );
}

export default CheckboxFormItem;
