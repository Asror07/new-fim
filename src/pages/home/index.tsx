import HeroSection from './sections/hero/index';
import ProtocolSection from './sections/protocol/index';
import CommunitySection from './sections/community';
import PlayerSection from './sections/player';
import SecuritySection from './sections/security/index';
import './home.scss';

const Home = () => {
   return (
      <div className="home">
         <HeroSection />
         <ProtocolSection />
         <SecuritySection />
         <PlayerSection />
         <CommunitySection />
      </div>
   );
};

export default Home;
