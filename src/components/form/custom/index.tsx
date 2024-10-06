import { Form, FormProps, Row } from 'antd';
import { ReactNode } from 'react';
import { formGutter, GutterType } from 'src/constants/form';

interface Props extends FormProps {
   gutter?: GutterType;
   children?: ReactNode;
}

export default function CustomForm({
   gutter = formGutter,
   children,
   ...rest
}: Props) {
   return (
      <Form layout="vertical" {...rest}>
         <Row gutter={gutter}>{children}</Row>
      </Form>
   );
}
