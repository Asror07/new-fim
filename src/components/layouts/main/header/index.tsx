import { useState, useEffect } from 'react';
import { CustomButton } from 'src/components/common';
import { Logo } from 'src/components/icons';
import './Header.scss';
import { useNavigate } from 'react-router-dom';

const MainLayoutHeader = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 30) {
            setIsScrolled(true);
         } else {
            setIsScrolled(false);
         }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <div>
         <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <Logo />
            <CustomButton onClick={() => navigate('/auth/signin')}>
               Login
            </CustomButton>
         </header>
      </div>
   );
};

export default MainLayoutHeader;
