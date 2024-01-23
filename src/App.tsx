import React, { FC, ReactElement } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme } from './Theme/customTheme';
import { Dashboard } from './Pages/Dashboard/dashboard';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { rootContext } from './context/root.context';
import ComposedContext from './context/composed.context';

const queryClient = new QueryClient();

const App: FC = (): ReactElement => {
  // it returns constructor function which react uses in turn to generate jsx react companent.
  return (
    <QueryClientProvider client={queryClient}>
      <ComposedContext Components={rootContext}>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          <Dashboard />
        </ThemeProvider>
      </ComposedContext>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
