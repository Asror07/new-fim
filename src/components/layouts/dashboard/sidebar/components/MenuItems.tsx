import { ArrowUp2, Minus } from 'iconsax-react';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTypedSelector } from 'src/app/store';
import useParamsHook from 'src/hooks/params';
import { findSubKey } from 'src/utils';

interface IMenuItem {
   path?: string;
   label: string;
   icon: React.ReactNode;
   subKey?: string;
   children?: Partial<IMenuItem>[];
}

function MenuItem({ path, label, icon, subKey, children }: IMenuItem) {
   const { colors, collapsed } = useTypedSelector((state) => state.layout);
   const { searchParams } = useParamsHook();
   const lotType = subKey === 'sub_lots' && searchParams.get('type');
   const parentPath = path?.split('/')?.[1];
   const { pathname } = useLocation();
   const active =
      pathname === path ||
      pathname.split('/')[1] === parentPath ||
      findSubKey(pathname) === subKey;

   //Children section
   const [open, setOpen] = useState(active);

   return (
      <div className={`menu-item ${active && 'menu-item-active'}`} key={path}>
         {/* Main menu item */}
         {children ? (
            <div className="menu-item-parent" onClick={() => setOpen(!open)}>
               <div className="menu-item-parent-left">
                  {icon}
                  {!collapsed && <p>{label}</p>}
               </div>

               {!collapsed && (
                  <div
                     className={`menu-item-parent-right ${
                        open && 'menu-item-parent-right-open'
                     }`}
                  >
                     <ArrowUp2 size="20" color={colors.primary} />
                  </div>
               )}
            </div>
         ) : (
            <Link to={path || '/'} className="menu-item-parent">
               <div className="menu-item-parent-left">
                  {icon}
                  {!collapsed && <p>{label}</p>}
               </div>
            </Link>
         )}

         {/* Menu item children */}
         {children && open && !collapsed && (
            <div className="menu-item-children">
               {children.map((item) => {
                  return (
                     <Link
                        to={item.path || '/'}
                        key={item.path}
                        className={
                           (
                              lotType
                                 ? lotType === item.path?.split('=')[1]
                                 : pathname.split('/')[1] ===
                                   item.path?.split('/')[1]
                           )
                              ? 'menu-item-children-active'
                              : ''
                        }
                     >
                        <Minus size="14" color={colors.white} />
                        <p>{item.label}</p>
                     </Link>
                  );
               })}
            </div>
         )}
      </div>
   );
}

export default MenuItem;
