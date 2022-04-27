import React from 'react';
import { createTheme, NextUIProvider } from '@nextui-org/react';

interface IProps {
  children: React.ReactNode;
}

const Providers: React.FC<IProps> = ({ children }) => {
  const darkTheme = createTheme({
    type: 'dark',
  });

  return <NextUIProvider theme={darkTheme}>{children}</NextUIProvider>;
};

export default Providers;
