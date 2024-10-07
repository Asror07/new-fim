import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Layouts
import { MainLayout } from 'src/components/layouts';
import AuthLayout from 'src/components/layouts/auth';
// Pages
import Dashboard from 'src/components/layouts/dashboard';
import {
   Custom404Page,
   EditProfilePage,
   HelpPage,
   HomePage,
   ProfilePage,
} from 'src/pages';
import Signin from 'src/pages/auth/signin';
import SignUp from 'src/pages/auth/signup';
import MyResume from 'src/pages/doctors/resume';
import MarketPlace from 'src/pages/marketplace';
import PatientPage from 'src/pages/patient';

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

            {/* Patient */}
            <Route path="/patient" element={<PatientPage />}></Route>
            {/* 404 */}
            <Route path="*" element={<Custom404Page />} />
         </Routes>
      </Router>
   );
}

export default RouterProvider;
