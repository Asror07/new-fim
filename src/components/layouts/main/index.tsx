import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { scrollToTop } from 'src/utils';
import MainLayoutFooter from './footer';
import MainLayoutHeader from './header';

function Main() {
   // Scroll to top when route changes
   const { pathname } = useLocation();

   useEffect(() => {
      scrollToTop();
   }, [pathname]);

   return (
      <div>
         <MainLayoutHeader />
         <Outlet />
         <MainLayoutFooter />
      </div>
   );
}

export default Main;
