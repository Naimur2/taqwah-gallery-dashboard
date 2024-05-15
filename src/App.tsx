import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';
import '@mantine/tiptap/styles.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from './Router';
import './index.css';
import '@mantine/dates/styles.css';

import { modals } from './modals';
import store, { persistor } from './store';
import { theme } from './theme';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MantineProvider forceColorScheme="light" theme={theme}>
          <ModalsProvider modals={modals}>
            <Notifications />
            <Router />
          </ModalsProvider>
        </MantineProvider>
      </PersistGate>
    </Provider>
  );
}
