import React, { useReducer } from 'react';
import { IField } from '../components/ChessBoard/constants';
import { FieldsAction } from './types';

interface IFieldsState {
  userFields: IField[];
  isCorrect: boolean | null;
  incorrectChoices: number;
}

export function useFields(): [IFieldsState, React.Dispatch<FieldsAction>] {
  const fieldsReducer = (
    state: IFieldsState,
    action: FieldsAction
  ): IFieldsState => {
    switch (action.type) {
      case 'add':
        return {
          ...state,
          userFields: [...state.userFields, action.payload.field],
        };
      case 'clear':
        return {
          ...state,
          userFields: [],
          incorrectChoices: 0,
        };
      case 'changeIncorrectChoices':
        return {
          ...state,
          incorrectChoices: state.incorrectChoices + 1,
        };
      case 'changeIsCorrect':
        return {
          ...state,
          isCorrect: action.payload.isCorrect,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fieldsReducer, {
    userFields: [],
    isCorrect: null,
    incorrectChoices: 0,
  });

  return [state, dispatch];
}
