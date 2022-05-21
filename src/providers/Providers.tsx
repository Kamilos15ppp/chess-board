import React, { useContext } from 'react';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { Switch, SwitchesAction, FieldsAction } from '../hooks/types';
import { useSwitches } from '../hooks/useSwitches';
import { useFields } from '../hooks/useFields';
import { IField } from '../components/ChessBoard/constants';

interface IProps {
  children: React.ReactNode;
}

interface ISwitchesContext {
  switches: Switch[];
  switchesDispatch: React.Dispatch<SwitchesAction>;
}

interface IFieldsContext {
  userFields: IField[];
  isCorrect: boolean | null;
  incorrectChoices: number;
  fieldsDispatch: React.Dispatch<FieldsAction>;
}

export const SwitchesContext = React.createContext<
  ISwitchesContext | undefined
>(undefined);

export const FieldsContext = React.createContext<IFieldsContext | undefined>(
  undefined
);

const Providers: React.FC<IProps> = ({ children }) => {
  const darkTheme = createTheme({
    type: 'dark',
  });

  const [{ switches }, switchesDispatch] = useSwitches();
  const [{ userFields, isCorrect, incorrectChoices }, fieldsDispatch] =
    useFields();

  return (
    <NextUIProvider theme={darkTheme}>
      <SwitchesContext.Provider value={{ switches, switchesDispatch }}>
        <FieldsContext.Provider
          value={{ userFields, isCorrect, incorrectChoices, fieldsDispatch }}
        >
          {children}
        </FieldsContext.Provider>
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

export const useFieldsValue = () => {
  const fieldsCtx = useContext(FieldsContext);
  if (!fieldsCtx) {
    throw new Error('Component beyond FieldsContext!');
  }
  return fieldsCtx;
};
