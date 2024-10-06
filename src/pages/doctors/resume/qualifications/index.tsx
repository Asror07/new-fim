import { Form, Row } from 'antd';
import useQualifications from './useQualifications';
import { InputFormItem } from 'src/components/form';
import StepFooter from '../common/stepFooter';
import ResumeCommonForm from '../common/form';

export default function Qualifications() {
   const { form, formItems } = useQualifications();

   return (
      <div>
         <div className="form-content">
            <div className="form-subtitle">
               <h3>Qualifications</h3>
            </div>
            <ResumeCommonForm form={form} formItems={formItems} />
         </div>
         <StepFooter nextText="Save & Next" />
      </div>
   );
}
