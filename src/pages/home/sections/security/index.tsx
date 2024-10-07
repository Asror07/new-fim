import { CustomButton } from 'src/components/common';
import './security.scss';

const SecuritySection = () => {
   return (
      <section className="security">
         <div className="security-bg"></div>
         <div className="security-container">
            <div className="text-block">
               <h3>Your assets, secured</h3>
               <p>
                  One of the longest-running and battle-tested DeFi protocol,
                  going strong since 2019
               </p>
            </div>
            <div className="card-block">
               <div className="card-left">
                  <div className="card-left-text">
                     <h2>Security Audits</h2>
                     <p>Performed by world-leading security companies</p>
                  </div>
                  <div className="card-left-audits">
                     <span className="card-left-audits-top">
                        Security reports:
                     </span>
                     <div className="top-wrapper">
                        {auditData.map((audit, index) => (
                           <div key={index} className="wrapper-card">
                              <div className="wrapper-card-text">
                                 <img src="./img/icon-security.png" alt="" />
                                 <div className="content-wrapper">
                                    <span className="audit-date">
                                       {audit.dateRange}
                                    </span>
                                    <h2 className="audit-title">
                                       {audit.title}
                                    </h2>
                                    <span className="audit-company">
                                       {audit.company}
                                    </span>
                                 </div>
                              </div>
                              <span>→</span>
                           </div>
                        ))}
                        <div className="message-btn">
                           <button>!</button>Idle also follows strict
                           integration guidelines
                        </div>
                     </div>
                  </div>
               </div>
               <div className="card-right">
                  <div className="card-right-title">
                     <h2>Fortified by $100K bug bounty program</h2>
                  </div>
                  <div>
                     <img
                        className="card-right-logo"
                        src="https://idle.finance/assets/img/safe-desktop.b0d668.webp"
                        alt="Security"
                     />
                  </div>
                  <p className="card-right-desc">
                     Highest security standards mean audits alone are not
                     enough. Find a smart contract bug or a security
                     vulnerability and get rewarded
                  </p>
                  <CustomButton className="button">Bounty details</CustomButton>
               </div>
            </div>
         </div>
      </section>
   );
};

export default SecuritySection;

const auditData = [
   {
      dateRange: 'December 2019 - April 2021',
      title: 'Doctors',
      company: 'by Quantstamp',
   },
   {
      dateRange: 'November 2020',
      title: 'Hospitals',
      company: 'by Quantstamp',
   },
   {
      dateRange: 'December 2021',
      title: 'Patients',
      company: 'by Quanstamp',
   },
];
