import React from 'react';

import styles from './Field.module.scss';

interface IProps {
  isWhite: boolean;
  position: string;
}

const Field: React.FC<IProps> = ({ isWhite, position }) => {
  return (
    <div
      className={styles.field}
      style={{
        backgroundColor: isWhite ? 'white' : 'black',
        gridArea: position,
      }}
    ></div>
  );
};

export default Field;
