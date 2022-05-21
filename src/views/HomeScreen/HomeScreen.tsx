import { useState } from 'react';
import { Modal, Text } from '@nextui-org/react';
import { useFieldsValue } from '../../providers/Providers';
import { FIELDS_INFO, IField } from '../../components/ChessBoard/constants';
import ChessBoard from '../../components/ChessBoard/ChessBoard';
import Menu from '../../components/Menu/Menu';
import CustomButton from '../../components/CustomButton/CustomButton';
import { v4 as uuidv4 } from 'uuid';

import styles from './HomeScreen.module.scss';

const HomeScreen = () => {
  const [isAppInit, setIsAppInit] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [drawedField, setDrawedFiled] = useState<IField | undefined>(undefined);
  const { userFields, incorrectChoices, fieldsDispatch } = useFieldsValue();

  const closeHandler = (): void => {
    setVisible(false);
    fieldsDispatch({ type: 'clear' });
  };

  const randomField = (): IField => {
    const random = Math.floor(Math.random() * 63);
    return FIELDS_INFO[random];
  };

  const drawField = (): void => setDrawedFiled(randomField());

  const resetApp = (): void => {
    setDrawedFiled(undefined);
    setIsAppInit(false);
  };

  const initApp = (): void => {
    drawField();
    setIsAppInit(true);
  };

  const showSummary = (): void => {
    setVisible(true);
    resetApp();
  };

  return (
    <div className={styles.wrapper}>
      <Modal
        closeButton
        aria-labelledby='summary'
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text size={18}>Summary</Text>
        </Modal.Header>
        <Modal.Body>
          <Text b size={14} color='primary'>
            {userFields.map((userField) => (
              <span key={uuidv4()} style={{ marginRight: '1rem' }}>
                {userField.letter.toUpperCase()}
                {userField.number}
              </span>
            ))}
          </Text>
          <Text b size={14} color='warning'>
            Correct: {userFields.length}
          </Text>
          <Text b size={14} color='error'>
            Incorrect: {incorrectChoices}
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <CustomButton text='Close Summary' onClick={closeHandler} />
        </Modal.Footer>
      </Modal>
      <ChessBoard drawedField={drawedField} drawField={drawField} />
      <Menu
        isAppInit={isAppInit}
        drawedField={drawedField}
        initializeApp={initApp}
        stopApp={showSummary}
      />
    </div>
  );
};

export default HomeScreen;
