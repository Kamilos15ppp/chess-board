import { useEffect, useState } from 'react';
import { useFieldsValue, useSwitchesValue } from '../../providers/Providers';
import { Switch } from '../../hooks/types';
import { IField } from '../ChessBoard/constants';
import { NormalColors } from '@nextui-org/react';

import CustomButton from '../CustomButton/CustomButton';
import CustomCard from '../CustomCard/CustomCard';
import CustomSwitch from '../CustomSwitch/CustomSwitch';

import styles from './Menu.module.scss';

interface IProps {
  isAppInit: boolean;
  initializeApp: () => void;
  stopApp: () => void;
  drawedField: IField | undefined;
}

const Menu: React.FC<IProps> = ({
  isAppInit,
  initializeApp,
  stopApp,
  drawedField,
}) => {
  const { switches, switchesDispatch } = useSwitchesValue();
  const { isCorrect } = useFieldsValue();

  const [cardColor, setCardColor] = useState<NormalColors>('primary');

  const handleOnSwitchChange = (name: string): void => {
    if (switches) {
      const element: Switch | undefined = switches.find(
        (el) => el.name === name
      );

      if (element!.isChecked) {
        switchesDispatch({
          type: 'uncheck',
          payload: { switch: `${element!.name}` },
        });
      } else {
        switchesDispatch({
          type: 'check',
          payload: { switch: `${element!.name}` },
        });
      }
    }
  };

  const fieldName = (): string => {
    if (drawedField) {
      return `${drawedField.letter.toUpperCase()}${drawedField.number}`;
    } else {
      return '';
    }
  };

  useEffect(() => {
    switch (isCorrect) {
      case true:
        setCardColor('success');
        break;
      case false:
        setCardColor('error');
        break;
      case null:
        setCardColor('primary');
        break;

      default:
        setCardColor('primary');
        break;
    }
  }, [isCorrect]);

  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <CustomCard
          headerText='Field to check'
          color={cardColor}
          text={fieldName()}
        />
      </div>
      <div className={styles.switches}>
        <CustomSwitch
          text='Fields markings'
          name='fieldsMarkings'
          checked={switches[0].isChecked}
          onChange={handleOnSwitchChange}
        />
        <CustomSwitch
          text='Rotate chessboard'
          name='rotateChessboard'
          checked={switches[1].isChecked}
          onChange={handleOnSwitchChange}
        />
      </div>
      <div className={styles.button}>
        <CustomButton
          text={isAppInit ? 'Show summary' : 'Start Application'}
          color='success'
          size='md'
          onClick={isAppInit ? stopApp : initializeApp}
        />
      </div>
    </section>
  );
};
export default Menu;
