import ResumeCommonForm from '../common/form';
import StepFooter from '../common/stepFooter';
import useWorkExperience from './useWorkExperience';

export default function WorkExperience() {
   const { form, formItems } = useWorkExperience();
   return (
      <div>
         <div className="form-content">
            <div className="form-subtitle">
               <h3>Work experience</h3>
            </div>
            <ResumeCommonForm form={form} formItems={formItems} />
         </div>
         <StepFooter nextText="Save & Next" />
      </div>
   );
}
