import ResumeCommonForm from '../common/form';
import StepFooter from '../common/stepFooter';
import useTeachingExperience from './useTeachingExperience';

export default function TeachingExperience() {
   const { form, formItems } = useTeachingExperience();

   return (
      <div>
         <div className="form-content">
            <div className="form-subtitle">
               <h3>Research</h3>
            </div>
            <ResumeCommonForm form={form} formItems={formItems} />
         </div>
         <StepFooter nextText="Save & Next" />
      </div>
   );
}
