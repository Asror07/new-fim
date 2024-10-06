import MenuItem from './components/MenuItems';
import './sidebar.scss';

function LayoutSidebar() {
   return (
      <div className="sidebar">
         <MenuItem label="Patient presentation" path="#" icon />
         <MenuItem label="Marketplace" path="/dashboard/marketplace" icon />
         <MenuItem label="Inbox" path="#" icon />
         <MenuItem
            label="Your profile"
            path="#"
            icon
            children={[{ label: 'Edit' }]}
         />
      </div>
   );
}

export default LayoutSidebar;
