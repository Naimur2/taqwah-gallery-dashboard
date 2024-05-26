import { Burger } from '@mantine/core';
import { useContext } from 'react';
import {
  RiArticleFill,
  RiArticleLine,
  RiChatQuoteFill,
  RiChatQuoteLine,
  RiFileList2Fill,
  RiFileList2Line,
  RiHome6Fill,
  RiHome6Line,
  RiHomeGearFill,
  RiHomeGearLine,
  RiMessage3Fill,
  RiMessage3Line,
  RiSettings2Fill,
  RiSettings2Line,
  RiStarSFill,
  RiStarSLine,
  RiUser3Fill,
  RiUser3Line,
} from 'react-icons/ri';
import cn from '@/utils/cn';
import SideNavItem from './components/SideNavItem';
import { toggleSidebar } from './state/layout-actions';
import LayoutContext from './state/layout-context';

type Props = {
  className?: string;
};

const sidebarItems = [
  {
    href: '/',
    title: 'Home',
    icon: <RiHome6Line size={20} />,
    iconActive: <RiHome6Fill size={20} />,
  },
  {
    href: '/categories',
    title: 'Categories',
    icon: <RiArticleLine size={20} />,
    iconActive: <RiArticleFill size={20} />,
  },
  {
    href: '/subcategories',
    title: 'Sub Categories',
    icon: <RiArticleLine size={20} />,
    iconActive: <RiArticleFill size={20} />,
  },
  {
    href: '/settings',
    title: 'Settings',
    icon: <RiSettings2Line size={20} />,
    iconActive: <RiSettings2Fill size={20} />,
  },
];

export default function Sidebar({ className }: Readonly<Props>) {
  const { state, dispatch } = useContext(LayoutContext);
  return (
    <aside
      className={cn(
        'bg-gray-100 z-[99] col-start-1 col-span-1 row-start-1 fixed inset-0 w-full sm:max-w-[14rem] lg:max-w-[18rem] transition-all duration-300 sm:!translate-x-0',
        { 'translate-x-0': state.isSidebarOpen, '-translate-x-full': !state.isSidebarOpen },

        className
      )}
    >
      <nav>
        <Burger
          className="sm:hidden m-4"
          size={20}
          opened={state.isSidebarOpen}
          onClick={() => dispatch(toggleSidebar())}
        />
        <div className="px-4 py-8">
          <img src="/logo.svg" alt="logo" className="w-16 md:w-32 mx-auto" />
          <h2 className="mx-auto text-center font-semibold mt-4">
            Taqwah <span className="text-blue-500">Dashboard</span>
          </h2>
        </div>

        <ul className="">
          {sidebarItems.map((item) => (
            <SideNavItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              iconActive={item.iconActive}
            >
              {item.title}
            </SideNavItem>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
