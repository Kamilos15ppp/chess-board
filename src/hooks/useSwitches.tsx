import React, { useReducer } from 'react';

import { Switch, SwitchesAction } from './types';

interface ISwitchesState {
  switches: Switch[];
}

export function useSwitches(): [
  ISwitchesState,
  React.Dispatch<SwitchesAction>
] {
  const switchesReducer = (
    state: ISwitchesState,
    action: SwitchesAction
  ): ISwitchesState => {
    switch (action.type) {
      case 'check':
        const arrWithCheck: Switch[] = state.switches.map((el) =>
          el.name === action.payload.switch
            ? { name: el.name, isChecked: true }
            : { name: el.name, isChecked: el.isChecked }
        );
        return {
          ...state,
          switches: arrWithCheck,
        };

      case 'uncheck':
        const arrWithUncheck: Switch[] = state.switches.map((el) =>
          el.name === action.payload.switch
            ? { name: el.name, isChecked: false }
            : { name: el.name, isChecked: el.isChecked }
        );
        return {
          ...state,
          switches: arrWithUncheck,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(switchesReducer, {
    switches: [
      { name: 'fieldsMarkings', isChecked: true },
      { name: 'rotateChessboard', isChecked: false },
    ],
  });

  return [state, dispatch];
}
