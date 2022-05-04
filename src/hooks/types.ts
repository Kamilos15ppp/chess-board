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
