import { CustomButton } from 'src/components/common';
import './community.scss';
import StatsBlock from './components/stat';
const CommunitySection = () => {
   return (
      <section className="home_community community">
         <div className="community-container container">
            <div className="community-container-top">
               <h2>Governance and community</h2>
               <p>Idle is a fully decentralized, community-governed protocol</p>
            </div>
            <StatsBlock />
            <div className="community-container-bottom">
               <div>Visit Forum</div>{' '}
               <CustomButton>Enter Governance</CustomButton>
            </div>
         </div>
      </section>
   );
};

export default CommunitySection;
