import { Steps } from 'antd';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useParamsHook from 'src/hooks/params';
import { stepItems } from './data';
import PersonalInfo from './personalInfo';
import ProfessionalInfo from './professionalInfo';
import Qualifications from './qualifications';
import WorkExperience from './workExperience';
import Research from './research';
import TeachingExperience from './teachingExperience';
import Documents from './documents';
import SourceVerification from './sourceVerification';
import './index.scss';

export default function MyResume() {
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
      <section className="resume">
         <div className="resume-dark_layer"></div>
         <div className="container">
            <div className="resume-content">
               <h1 className="resume-content-title">
                  Create your own resume to continue
               </h1>
               <div className={'resume-content-steps_container'}>
                  <div className="resume-content-steps_container-steps">
                     <Steps
                        onChange={onChange}
                        progressDot
                        current={step}
                        items={stepItems}
                        direction="vertical"
                     />
                  </div>
                  <div className="form">
                     {step === 0 ? (
                        <PersonalInfo />
                     ) : step === 1 ? (
                        <ProfessionalInfo />
                     ) : step === 2 ? (
                        <Qualifications />
                     ) : step === 3 ? (
                        <WorkExperience />
                     ) : step === 4 ? (
                        <Research />
                     ) : step === 5 ? (
                        <TeachingExperience />
                     ) : step === 6 ? (
                        <Documents />
                     ) : step === 7 ? (
                        <SourceVerification />
                     ) : (
                        ''
                     )}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
