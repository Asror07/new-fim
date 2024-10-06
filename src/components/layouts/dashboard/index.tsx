import { Outlet, useLocation } from 'react-router-dom';
import './dashboard.scss';
import LayoutSidebar from './sidebar';
import HeaderDash from './dashboardHeader';
import { useEffect } from 'react';

function Dashboard() {
   const { pathname } = useLocation();
   console.log('pathname:', location.pathname);
   useEffect(() => {}, [pathname]);
   return (
      <div className="layout_dash ">
         <div className="containerDash">
            <HeaderDash />
            <div className="layout_dash-right">
               {location.pathname === '/dashboard/marketplace' ? (
                  ''
               ) : (
                  <LayoutSidebar />
               )}

               <div className="layout_dash-content">
                  <Outlet />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Dashboard;
