import React from 'react';
import { NormalSizes, Switch } from '@nextui-org/react';

import styles from './CustomSwitch.module.scss';

interface IProps {
  text: string;
  checked: boolean;
  name: string;
  size?: NormalSizes;
  onChange: (name: string) => void;
}

const CustomSwitch: React.FC<IProps> = ({
  text,
  checked,
  name,
  size = 'sm',
  onChange,
}) => {
  return (
    <div className={styles.wrapper}>
      <Switch
        shadow
        checked={checked}
        size={size}
        onChange={() => onChange(name)}
      />
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default CustomSwitch;
