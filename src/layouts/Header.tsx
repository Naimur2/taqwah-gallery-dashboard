/* eslint-disable import/order */
import { logout, selectAuth } from '@/store/features/auth';
import cn from '@/utils/cn';
import { Burger, Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { IconLogout } from '@tabler/icons-react';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from './state/layout-actions';
import LayoutContext from './state/layout-context';
import { useNavigate } from 'react-router-dom';

type Props = {
  className?: string;
};

export default function Header({ className }: Readonly<Props>) {
  const { state, dispatch } = useContext(LayoutContext);
  const auth = useSelector(selectAuth);
  const appDispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    modals.openConfirmModal({
      title: 'Please confirm your action',
      children: (
        <Text size="sm">
          Are you sure you want to logout? <br />
        </Text>
      ),
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      onCancel: () => {},
      onConfirm: () => {
        appDispatch(logout());
        navigate('/');
      },
      confirmProps: { className: 'bg-red-500 text-white hover:bg-red-400' },
    });
  };

  return (
    <header className={cn('bg-gray-200 p-4 z-[99]', className)}>
      <nav className="flex gap-4 items-center justify-between">
        <Burger
          className="sm:hidden"
          size={20}
          opened={state.isSidebarOpen}
          onClick={() => dispatch(toggleSidebar())}
        />

        <h1>
          Welcome <span className="text-blue-500 capitalize">{auth.user?.name}</span>
        </h1>

        <div className="flex gap-4 items-center">
          <button
            className="flex items-center justify-center gap-2 bg-gray-700 text-white px-4 !py-2 rounded-md"
            onClick={logOut}
            type="button"
          >
            <span className="hidden md:block">Logout</span>
            <IconLogout size={20} />
          </button>
        </div>
      </nav>
    </header>
  );
}
