import { useContext } from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import { toggleSidebar } from '../state/layout-actions';
import LayoutContext from '../state/layout-context';
import cn from '@/utils/cn';

type TProps = {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconActive?: React.ReactNode;
};

export default function SideNavItem({ children, href, icon, iconActive }: TProps) {
  const { dispatch } = useContext(LayoutContext);
  const match = useMatch({
    path: href,
  });

  return (
    <li>
      <NavLink
        to={href}
        onClick={() => dispatch(toggleSidebar())}
        className={(props) =>
          cn('flex gap-3 py-4 items-center px-4 text-gray-700 hover:bg-gray-200', {
            'bg-gray-200': props.isActive,
          })
        }
      >
        { match ? iconActive : icon}
        {children}
      </NavLink>
    </li>
  );
}
