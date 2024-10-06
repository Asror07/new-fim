import AntdProvider from './provider/antd';
import AosProvider from './provider/aos';
import ReduxProvider from './provider/redux';
import RouterProvider from './provider/router';
import 'swiper/css';
import 'swiper/css/pagination';

function App() {
   return (
      <ReduxProvider>
         <AntdProvider>
            <AosProvider>
               <RouterProvider />
            </AosProvider>
         </AntdProvider>
      </ReduxProvider>
   );
}

export default App;
