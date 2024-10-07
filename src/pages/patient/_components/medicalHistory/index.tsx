import ResumeCommonForm from 'src/pages/doctors/resume/common/form';
import StepFooter from 'src/pages/doctors/resume/common/stepFooter';
import usePatinentMedicalHistory from './useMedicalHistory';

export default function PatientMedicalHistory() {
   const { form, formItems } = usePatinentMedicalHistory();
   return (
      <div>
         <div className="form-content">
            <div className="form-subtitle">
               <h3>Personal Information</h3>
            </div>
            <ResumeCommonForm form={form} formItems={formItems} />
         </div>
         <StepFooter nextText="Save" />
      </div>
   );
}
