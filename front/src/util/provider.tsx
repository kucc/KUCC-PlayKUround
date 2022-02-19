// Provider.js
import React, { useEffect } from 'react';

import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';

import { darkTheme, lightTheme } from './theme';

const Providers = ({ children }: { children: any }) => {
  const [mounted, setMounted] = React.useState(false);
  const darkMode = useDarkMode(false);
  const theme = darkMode.value ? darkTheme : lightTheme;

  useEffect(() => {
    setMounted(true);
  }, []);

  const body = <ThemeProvider theme={theme}>{children}</ThemeProvider>;

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>;
  }

  return body;
};

export default Providers;
