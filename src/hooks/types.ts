import { IField } from '../components/ChessBoard/constants';

export interface Switch {
  name: string;
  isChecked: boolean;
}

export interface SwitchCheckAction {
  type: 'check';
  payload: {
    switch: Switch['name'];
  };
}

export interface SwitchUncheckeAction {
  type: 'uncheck';
  payload: {
    switch: Switch['name'];
  };
}

export type SwitchesAction = SwitchCheckAction | SwitchUncheckeAction;

export interface FieldAddAction {
  type: 'add';
  payload: {
    field: IField;
  };
}

export interface FieldClearAction {
  type: 'clear';
}

export interface FieldChangeIsCorrectAction {
  type: 'changeIsCorrect';
  payload: {
    isCorrect: boolean | null;
  };
}

export interface FieldChangeIncorrectChoicesAction {
  type: 'changeIncorrectChoices';
}

export type FieldsAction =
  | FieldAddAction
  | FieldClearAction
  | FieldChangeIsCorrectAction
  | FieldChangeIncorrectChoicesAction;
