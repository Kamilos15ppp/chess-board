import React from 'react';
import { NormalSizes, Switch } from '@nextui-org/react';

import styles from './CustomSwitch.module.scss';

interface IProps {
  text: string;
  checked: boolean;
  size?: NormalSizes;
  onChange: () => void;
}

const CustomSwitch: React.FC<IProps> = ({
  text,
  checked,
  size = 'sm',
  onChange,
}) => {
  return (
    <div className={styles.wrapper}>
      <Switch shadow checked={checked} size={size} onChange={onChange} />
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default CustomSwitch;
