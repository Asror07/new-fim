import ResumeCommonForm from 'src/pages/doctors/resume/common/form';
import StepFooter from 'src/pages/doctors/resume/common/stepFooter';
import usePatinentMedicalInfo from './useMedicalInfo';

export default function PatientMedicalInfo() {
   const { form, formItems } = usePatinentMedicalInfo();
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
