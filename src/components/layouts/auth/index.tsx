import { Link, Outlet, useLocation } from 'react-router-dom';
import './index.scss';

export default function AuthLayout() {
   const { pathname } = useLocation();

   const splittedPath = pathname.split('/');

   const isSignin = splittedPath[splittedPath.length - 1] == 'signin';

   return (
      <section className="auth_layout">
         <div className="auth_layout-dark_layer"></div>
         <div className="auth_layout-content">
            <div className="auth_layout-card">
               <div className="auth_layout-card-content">
                  <h1 className="auth_layout-card-content-title_1">
                     {isSignin ? 'Welcome!' : 'Create a New Account'}
                  </h1>
                  <h2 className="auth_layout-card-content-title_2">
                     {isSignin ? 'Sign in to Continue' : 'Sign up to continue'}
                  </h2>
                  <Outlet />
               </div>
            </div>
            {isSignin ? (
               <div className="auth_layout-account">
                  Don't have an account? <Link to="./signup">Sign up</Link>
               </div>
            ) : (
               <div className="auth_layout-account">
                  Already have an account? <Link to="./signin">Sign in</Link>
               </div>
            )}
         </div>
      </section>
   );
}
