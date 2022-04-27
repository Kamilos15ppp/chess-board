import React from 'react';
import { Card } from '@nextui-org/react';

import styles from './CustomCard.module.scss';

interface IProps {
  headerText: string;
  text: string;
}

const CustomCard: React.FC<IProps> = ({ headerText, text }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.headerText}>{headerText}</h2>
      <Card css={{ mw: '10rem' }}>
        <p className={styles.text}>{text}</p>
      </Card>
    </div>
  );
};

export default CustomCard;
