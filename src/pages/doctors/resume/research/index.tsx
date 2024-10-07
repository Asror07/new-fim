import ResumeCommonForm from '../common/form';
import StepFooter from '../common/stepFooter';
import useResearch from './useResearch';

export default function Research() {
   const { form, formItems } = useResearch();

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
