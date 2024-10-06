import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Layouts
import AuthLayout from 'src/components/layouts/auth';
import { MainLayout } from 'src/components/layouts';
// Pages
import {
   Custom404Page,
   EditProfilePage,
   HelpPage,
   HomePage,
   ProfilePage,
} from 'src/pages';
import SignUp from 'src/pages/auth/signup';
import Signin from 'src/pages/auth/signin';
import Dashboard from 'src/components/layouts/dashboard';
import MarketPlace from 'src/pages/marketplace';
import DoctorsSection from 'src/pages/marketplace/doctors';
import MyResume from 'src/pages/doctors/resume';

function RouterProvider() {
   return (
      <Router>
         <Routes>
            {/* Help */}
            <Route path="/help" element={<HelpPage />} />

            {/* Main Layout */}
            <Route path="/" element={<MainLayout />}>
               <Route index element={<HomePage />} />
            </Route>

            {/* Dashboard */}
            <Route path="/dashboard" element={<Dashboard />}>
               {/* <Route index element={<DoctorsSection />} /> */}
               <Route path="marketplace" element={<MarketPlace />} />
               <Route path="profile" element={<ProfilePage />} />
               <Route path="profile/edit" element={<EditProfilePage />} />
            </Route>

            {/* Auth layout */}
            <Route path="/auth" element={<AuthLayout />}>
               <Route path="signup" element={<SignUp />} />
               <Route path="signin" element={<Signin />} />
            </Route>

            {/* Doctors */}
            <Route path="/doctors/my-resume" element={<MyResume />}></Route>

            {/* 404 */}
            <Route path="*" element={<Custom404Page />} />
         </Routes>
      </Router>
   );
}

export default RouterProvider;
