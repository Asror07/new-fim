import FilterMarketPlaceSecsion from './_components/filter';
import DoctorsSection from './doctors';
import './marketplace.scss';

function MarketPlace() {
   return (
      <div className="admin_marketPlace">
         <FilterMarketPlaceSecsion />
         <DoctorsSection />
      </div>
   );
}

export default MarketPlace;
