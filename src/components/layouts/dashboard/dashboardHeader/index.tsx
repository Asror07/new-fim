import { Input } from 'antd';
import './headerDash.scss';
import { SearchProps } from 'antd/es/input';
import { SearchNormal1 } from 'iconsax-react';

const { Search } = Input;
const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
   console.log(info?.source, value);

function HeaderDash() {
   return (
      <div className="headerDash">
         <h1>FMLI logo</h1>
         <div className="headerDash-search">
            <Search
               addonBefore={<SearchNormal1 size="20" color="#FF8A65" />}
               placeholder="Search"
               onSearch={onSearch}
               // enterButton
            />
         </div>
         <div className="headerDash-profile">
            <div className="headerDash-profile">
               <img
                  src="https://via.placeholder.com/150"
                  alt="Profile Pic"
                  className="headerDash-profile-img"
               />
            </div>
            <div className="headerDash-profile-info">
               <h3>User Name</h3>
               <p>Role</p>
            </div>
         </div>
      </div>
   );
}

export default HeaderDash;
