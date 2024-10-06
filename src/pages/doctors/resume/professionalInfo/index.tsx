import { Form, Row } from 'antd';
import useProfessionalInfo from './useProfessionalInfo';
import { InputFormItem } from 'src/components/form';
import StepFooter from '../common/stepFooter';
import ResumeCommonForm from '../common/form';

export default function ProfessionalInfo() {
   const { form, formItems } = useProfessionalInfo();

   return (
      <div>
         <div className="form-content">
            <div className="form-subtitle">
               <h3>Professional Information</h3>
            </div>
            <ResumeCommonForm form={form} formItems={formItems} />
         </div>
         <StepFooter nextText="Save & Next" />
      </div>
   );
}
