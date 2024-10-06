import { Form, Row } from 'antd';
import { InputFormItem } from 'src/components/form';
import StepFooter from '../common/stepFooter';
import usePersonalInfo from './usePersonalInfo';
import ResumeCommonForm from '../common/form';

export default function PersonalInfo() {
   const { form, formItems } = usePersonalInfo();
   return (
      <div>
         <div className="form-content">
            <div className="form-subtitle">
               <h3>Personal Information</h3>
            </div>
            <ResumeCommonForm form={form} formItems={formItems} />
         </div>
         <StepFooter nextText="Save & Next" />
      </div>
   );
}
