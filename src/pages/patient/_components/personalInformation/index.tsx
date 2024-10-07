import ResumeCommonForm from 'src/pages/doctors/resume/common/form';
import StepFooter from 'src/pages/doctors/resume/common/stepFooter';
import usePatinentPersonalInfo from './usepersonalInfo';

export default function PatientPersonalInfo() {
   const { form, formItems } = usePatinentPersonalInfo();
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
