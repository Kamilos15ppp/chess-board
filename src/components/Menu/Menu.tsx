import { useEffect, useState } from 'react';
import { useSwitchesValue } from '../../providers/Providers';
import { Switch } from '../../hooks/types';

import CustomButton from '../CustomButton/CustomButton';
import CustomCard from '../CustomCard/CustonCard';
import CustomInput from '../CustomInput/CustomInput';
import CustomSwitch from '../CustomSwitch/CustomSwitch';

import styles from './Menu.module.scss';

const Menu = () => {
  const { switches, switchesDispatch } = useSwitchesValue();

  const [isMobileView, setIsMobileView] = useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleOpenMenu = (): void => setIsMenuOpen(!isMenuOpen);

  const handleOnResize = (): void => {
    const width = window.innerWidth;

    if (width >= 768) {
      setIsMobileView(false);
    } else {
      setIsMobileView(true);
    }
  };

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

  const handleOnStart = (): void => {}; //TODO: add method

  const mobileMenuClass: string = isMenuOpen ? styles.opened : styles.closed;

  const optionVisibility: string = isMenuOpen ? '' : styles.hidden;

  const mobileMenuText: string = isMenuOpen ? 'Close menu' : 'Open menu';

  useEffect(() => {
    handleOnResize();
    window.addEventListener('resize', handleOnResize);

    return () => {
      window.removeEventListener('resize', handleOnResize);
    };
  }, [isMobileView]);

  return (
    <section
      className={`${styles.wrapper}
        ${isMobileView ? mobileMenuClass : ''}
      `}
    >
      {isMobileView && (
        <div className={styles.button}>
          <CustomButton
            text={mobileMenuText}
            onClick={handleOpenMenu}
            bordered={isMenuOpen}
          />
        </div>
      )}
      <div className={styles.el2}>
        <CustomCard headerText='Field name' text='A2' />
      </div>
      {switches[2].isChecked && (
        <div className={styles.input}>
          <CustomInput labelPlaceholder='Input field name' />
        </div>
      )}
      <div
        className={`${styles.switches} ${isMobileView ? optionVisibility : ''}`}
      >
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
        <CustomSwitch
          text='Checking/Inputting'
          name='checkingOrInputting'
          checked={switches[2].isChecked}
          onChange={handleOnSwitchChange}
        />
      </div>
      <div
        className={`${styles.secButton} ${
          isMobileView ? optionVisibility : ''
        }`}
      >
        <CustomButton
          text='Start'
          color='success'
          size='md'
          onClick={handleOnStart}
        />
      </div>
    </section>
  );
};
export default Menu;
