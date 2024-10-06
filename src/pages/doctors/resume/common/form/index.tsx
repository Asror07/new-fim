import { Form, FormInstance, Row } from 'antd';
import { InputFormItem } from 'src/components/form';

interface Props {
   form: FormInstance<any>;
   formItems: any;
}

export default function ResumeCommonForm({ form, formItems }: Props) {
   const formGutter = innerWidth > 576 ? 12 : 24;

   return (
      <Form form={form} layout={'vertical'} requiredMark={false}>
         <Row gutter={formGutter}>
            {formItems.map((item: any) =>
               item.name === 'employees_range' ? (
                  ''
               ) : (
                  <InputFormItem col={formGutter} key={item.name} {...item} />
               )
            )}
         </Row>
      </Form>
   );
}
