import React, { useContext } from 'react';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { Switch, SwitchesAction } from '../hooks/types';
import { useSwitches } from '../hooks/useSwitches';

interface IProps {
  children: React.ReactNode;
}

interface ISwitchesContext {
  switches: Switch[];
  switchesDispatch: React.Dispatch<SwitchesAction>;
}

export const SwitchesContext = React.createContext<
  ISwitchesContext | undefined
>(undefined);

const Providers: React.FC<IProps> = ({ children }) => {
  const darkTheme = createTheme({
    type: 'dark',
  });

  const [{ switches }, switchesDispatch] = useSwitches();

  return (
    <NextUIProvider theme={darkTheme}>
      <SwitchesContext.Provider value={{ switches, switchesDispatch }}>
        {children}
      </SwitchesContext.Provider>
    </NextUIProvider>
  );
};

export default Providers;

export const useSwitchesValue = () => {
  const switchesCtx = useContext(SwitchesContext);
  if (!switchesCtx) {
    throw new Error('Component beyond SwitchContext!');
  }
  return switchesCtx;
};
