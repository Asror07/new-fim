import ResumeCommonForm from '../common/form';
import StepFooter from '../common/stepFooter';
import useDocuments from './useDocuments';

export default function Documents() {
   const { form, formItems } = useDocuments();

   return (
      <div>
         <div className="form-content">
            <div className="form-subtitle">
               <h3>Documents</h3>
            </div>
            <ResumeCommonForm form={form} formItems={formItems} />
         </div>
         <StepFooter nextText="Save & Next" />
      </div>
   );
}
