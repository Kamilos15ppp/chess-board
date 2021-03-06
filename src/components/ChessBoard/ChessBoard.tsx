import { v4 as uuidv4 } from 'uuid';
import NotationElement from '../NotationElement/NotationElement';
import Field from '../Field/Field';
import { useFieldsValue, useSwitchesValue } from '../../providers/Providers';
import * as chessBoardConst from './constants';

import styles from './ChessBoard.module.scss';

interface IProps {
  drawField: () => void;
  drawedField: chessBoardConst.IField | undefined;
}

const ChessBoard: React.FC<IProps> = ({ drawField, drawedField }) => {
  const { switches } = useSwitchesValue();
  const { fieldsDispatch } = useFieldsValue();
  const {
    NOTATION_NUMBERS,
    NOTATION_LETTERS,
    FIELDS_INFO,
    GRID_TEMPLATE_AREAS,
    GRID_TEMPLATE_AREAS_REVERSED,
  } = chessBoardConst;

  const notationNumbersElements: JSX.Element[] = NOTATION_NUMBERS.map(
    (element) => {
      return <NotationElement key={uuidv4()} char={element} />;
    }
  );

  const notationLettersElements: JSX.Element[] = NOTATION_LETTERS.map(
    (letter) => {
      return <NotationElement key={uuidv4()} char={letter} />;
    }
  );

  const delayedDraw = (): void => {
    setTimeout(() => {
      drawField();

      fieldsDispatch({
        type: 'changeIsCorrect',
        payload: { isCorrect: null },
      });
    }, 1000);
  };

  const handleOnClick = (field: chessBoardConst.IField): void => {
    if (drawedField) {
      if (field === drawedField) {
        fieldsDispatch({
          type: 'changeIsCorrect',
          payload: { isCorrect: true },
        });

        fieldsDispatch({
          type: 'add',
          payload: { field },
        });

        delayedDraw();
      } else {
        fieldsDispatch({
          type: 'changeIsCorrect',
          payload: { isCorrect: false },
        });

        fieldsDispatch({
          type: 'changeIncorrectChoices',
        });

        delayedDraw();
      }
    }
  };

  const fieldsElements: JSX.Element[] = FIELDS_INFO.map((field) => {
    return (
      <Field
        key={uuidv4()}
        isWhite={field.isWhite}
        position={`${field.letter}${field.number}`}
        onClick={() => handleOnClick(field)}
      />
    );
  });

  const fileds: JSX.Element[] = switches[1].isChecked
    ? fieldsElements.reverse()
    : fieldsElements;

  const notationNumbersStyles: string = `${styles.notationNumbers} ${
    switches[1].isChecked ? styles.reversed : ''
  }`;

  const notationLettersStyles: string = `${styles.notationLetters} ${
    switches[1].isChecked ? styles.reversed : ''
  }`;

  const fieldsContainerStyles: { gridTemplateAreas: string } = {
    gridTemplateAreas: `${
      switches[1].isChecked ? GRID_TEMPLATE_AREAS_REVERSED : GRID_TEMPLATE_AREAS
    }`,
  };

  const notationNumbers: JSX.Element | null = switches[0].isChecked ? (
    <div className={notationNumbersStyles}>{notationNumbersElements}</div>
  ) : null;

  const notationLetters: JSX.Element | null = switches[0].isChecked ? (
    <div className={notationLettersStyles}>{notationLettersElements}</div>
  ) : null;

  return (
    <section className={styles.wrapper}>
      <div className={styles.boardContainer}>
        {notationNumbers}
        {notationLetters}
        <div className={styles.fieldsContainer} style={fieldsContainerStyles}>
          {fileds}
        </div>
      </div>
    </section>
  );
};

export default ChessBoard;
