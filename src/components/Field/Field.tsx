import React from 'react';

import styles from './Field.module.scss';

interface IProps {
  isWhite: boolean;
  position: string;
  onClick: () => void;
}

const Field: React.FC<IProps> = ({ isWhite, position, onClick }) => {
  return (
    <div
      className={styles.field}
      style={{
        backgroundColor: isWhite ? 'white' : 'black',
        gridArea: position,
      }}
      onClick={onClick}
    ></div>
  );
};

export default Field;
