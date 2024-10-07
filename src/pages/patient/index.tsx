import { Steps } from 'antd';
import './patient.scss';
import { useLocation } from 'react-router-dom';
import useParamsHook from 'src/hooks/params';
import { useState } from 'react';
import { patientItems } from './data';
import PatientPersonalInfo from './_components/personalInformation';
import PatientMedicalInfo from './_components/medicalInformation';
import PatientMedicalHistory from './_components/medicalHistory';

function PatientPage() {
   const { pathname } = useLocation();

   const { searchParams, handleMakeParams } = useParamsHook();
   const firstTime = pathname === '/';
   const [step, setStep] = useState<number>(
      Number(searchParams.get('step')) || 0
   );
   const onChange = (key: number) => {
      handleMakeParams('step', key.toString());
      setStep(key);
   };
   return (
      <div className="patient">
         <div className="patient-dark_layer"> </div>
         <div className="container">
            <div className="patient-content">
               <h1 className="patient-content-title">
                  Create patinet's information to continue
               </h1>
               <div className={'resume-content-steps_container'}>
                  <div className="resume-content-steps_container-steps">
                     <Steps
                        onChange={onChange}
                        progressDot
                        current={step}
                        items={patientItems}
                        direction="vertical"
                     />
                  </div>
                  <div className="form">
                     {step === 0 ? (
                        <PatientPersonalInfo />
                     ) : step === 1 ? (
                        <PatientMedicalInfo />
                     ) : step === 2 ? (
                        <PatientMedicalHistory />
                     ) : null}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default PatientPage;
