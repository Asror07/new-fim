import { ArrowRight, Location } from 'iconsax-react';
import { Link } from 'react-router-dom';
import './card.scss';

import CardImg from '/public/background.webp';

export default function DoctorsCard() {
   return (
      <div className="doctors_cards">
         <div className="doctors_cards-card">
            <div className="doctors_cards-card-header">
               <div className="doctors_cards-card-header-img">
                  <img src="/public/background.webp" alt="Doctor" />
               </div>
               <div className={CardImg}>
                  <h3>Dr. Ahmed Ali</h3>
                  <p>Dentist</p>
               </div>
            </div>
            <div className="doctors_cards-card-content">
               <div className="doctors_cards-card-contact">
                  <Location size="16" color="#15b6a4" />
                  <p>USA, New York</p>
               </div>

               <div className="doctors_cards-card-desc">
                  I'm a front-end developer who likes challenges, solves
                  problems quickly, is eager to learn, and gets along well with
                  the team.
               </div>
               <div className="doctors_cards-card-subs">
                  {subProfessionsData.map((item, index) => (
                     <div
                        key={item + index}
                        className="doctors_cards-card-subProfession"
                     >
                        {item}
                     </div>
                  ))}
               </div>
            </div>
            <div className="doctors_cards-card-bottom">
               <Link to="#">
                  <h3>
                     See more <ArrowRight size="20" color="#15b6a4" />
                  </h3>
               </Link>
            </div>
         </div>
      </div>
   );
}

const subProfessionsData = ['Developer', 'Engineer', 'Full-stack'];
