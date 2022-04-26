import React from 'react';
import { createTheme, NextUIProvider } from '@nextui-org/react';

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  const darkTheme = createTheme({
    type: 'dark',
  });

  return <NextUIProvider theme={darkTheme}>{children}</NextUIProvider>;
};

export default Providers;
