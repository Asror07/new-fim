import { useState } from 'react';
import Typist from 'react-typist';
import CardItem from './components/card';
import { docum } from './components/index';
const words = ['Doctors', 'Hospitals', 'Patients'];
import './hero.scss';

const HomeHeroSection = () => {
   const [index, setIndex] = useState(0);

   const handleTypingDone = () => {
      setTimeout(() => {
         setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 2000);
   };

   return (
      <section className="hero">
         <div className="hero-bg"></div>
         <div className="hero-content">
            <h1>
               <span>Introducing the </span>
               <span> Global Passport for</span>
               <div className="typist-wrapper">
                  <Typist
                     className="typist-color"
                     key={index}
                     onTypingDone={handleTypingDone}
                     avgTypingDelay={100}
                  >
                     {words[index]}
                  </Typist>

                  <span> in the UAE</span>
               </div>
            </h1>

            <div className="hero-content-card-list">
               {docum.map((docItem) =>
                  docItem.content.map((project, index) => (
                     <CardItem
                        key={index}
                        title={project.title}
                        icon={project.icon}
                        percent={project.percent}
                        amount={project.amount}
                        label={project.label}
                        text={project.text}
                     />
                  ))
               )}
            </div>
         </div>

         <div className="hero-footer">
            <div className="hero-footer-investors">
               <p className="subtitle">Trusted by</p>
               {/* <div className="hero-footer-investors-logo">
                  {investors.map((investor, index) => (
                     <a
                        className="investor-logo"
                        href={investor.link}
                        key={index}
                     >
                        <investor.logo />
                     </a>
                  ))}
               </div> */}
            </div>
            <div className="hero-footer-stats"></div>
         </div>
      </section>
   );
};

export default HomeHeroSection;
