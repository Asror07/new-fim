import { useLocation } from 'react-router-dom';
import DoctorsCard from '../_components/card';
import './doctors.scss';
import { useEffect } from 'react';

function DoctorsSection() {
   return (
      <div className="doctors">
         {DoctorsData.map((item, index) => (
            <DoctorsCard key={index} />
         ))}
      </div>
   );
}

export default DoctorsSection;

const DoctorsData = [1, 2, 3, 4, 5, 6];
