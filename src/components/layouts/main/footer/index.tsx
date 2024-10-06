import { Logo } from 'src/components/icons';
import './footer.scss';
import { Group, data } from './components/links';
import { Input } from 'antd';
import type { GetProps } from 'antd';
import { Link } from 'react-router-dom';

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
   console.log(info?.source, value);

const MainLayoutFooter: React.FC = () => {
   return (
      <footer>
         <div className="container">
            <div className="footer">
               <div className="footer-left">
                  <div className="footer-left-logo">
                     <Logo />
                  </div>
                  <div className="footer-left-input">
                     <Search
                        placeholder="Enter your E-mail"
                        enterButton="Get Updates"
                        size="large"
                        onSearch={onSearch}
                     />
                  </div>
                  <div className="footer-left-text">
                     By opting-in you agree to our{' '}
                     <Link
                        className="text-link"
                        to="https://idle.finance/privacy-policy"
                     >
                        privacy policy
                     </Link>
                  </div>
               </div>
               <div className="footer-right">
                  <div className="footer-right-groups">
                     {data.map((group) => (
                        <Group key={group.id} group={group} />
                     ))}
                  </div>
               </div>
            </div>
            <div className="footer-policy">
               <div>© 2024 Idle DAO LLC</div>
               <div>IPFS App</div>
               <div>Terms of Service</div>
               <div>Privacy Policy</div>
               <div>Cookie Policy</div>
            </div>
         </div>
      </footer>
   );
};

export default MainLayoutFooter;
