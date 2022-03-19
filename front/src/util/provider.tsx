// Provider.js
import React, { useEffect, useState } from 'react';

import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';

import { darkTheme, lightTheme } from './theme';

const Providers = ({ children }: { children: any }) => {
  const [mounted, setMounted] = useState<boolean>(false);
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
