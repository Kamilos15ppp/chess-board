import { v4 as uuidv4 } from 'uuid';
import NotationElement from '../NotationElement/NotationElement';
import Field from '../Field/Field';

import styles from './ChessBoard.module.scss';

type TField = {
  number: string;
  letter: string;
  isWhite: boolean;
};

const notationNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
const notationLetters: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const fieldsInfo: TField[] = [
  { number: '1', letter: 'a', isWhite: false },
  { number: '2', letter: 'a', isWhite: true },
  { number: '3', letter: 'a', isWhite: false },
  { number: '4', letter: 'a', isWhite: true },
  { number: '5', letter: 'a', isWhite: false },
  { number: '6', letter: 'a', isWhite: true },
  { number: '7', letter: 'a', isWhite: false },
  { number: '8', letter: 'a', isWhite: true },
  { number: '1', letter: 'b', isWhite: true },
  { number: '2', letter: 'b', isWhite: false },
  { number: '3', letter: 'b', isWhite: true },
  { number: '4', letter: 'b', isWhite: false },
  { number: '5', letter: 'b', isWhite: true },
  { number: '6', letter: 'b', isWhite: false },
  { number: '7', letter: 'b', isWhite: true },
  { number: '8', letter: 'b', isWhite: false },
  { number: '1', letter: 'c', isWhite: false },
  { number: '2', letter: 'c', isWhite: true },
  { number: '3', letter: 'c', isWhite: false },
  { number: '4', letter: 'c', isWhite: true },
  { number: '5', letter: 'c', isWhite: false },
  { number: '6', letter: 'c', isWhite: true },
  { number: '7', letter: 'c', isWhite: false },
  { number: '8', letter: 'c', isWhite: true },
  { number: '1', letter: 'd', isWhite: true },
  { number: '2', letter: 'd', isWhite: false },
  { number: '3', letter: 'd', isWhite: true },
  { number: '4', letter: 'd', isWhite: false },
  { number: '5', letter: 'd', isWhite: true },
  { number: '6', letter: 'd', isWhite: false },
  { number: '7', letter: 'd', isWhite: true },
  { number: '8', letter: 'd', isWhite: false },
  { number: '1', letter: 'e', isWhite: false },
  { number: '2', letter: 'e', isWhite: true },
  { number: '3', letter: 'e', isWhite: false },
  { number: '4', letter: 'e', isWhite: true },
  { number: '5', letter: 'e', isWhite: false },
  { number: '6', letter: 'e', isWhite: true },
  { number: '7', letter: 'e', isWhite: false },
  { number: '8', letter: 'e', isWhite: true },
  { number: '1', letter: 'f', isWhite: true },
  { number: '2', letter: 'f', isWhite: false },
  { number: '3', letter: 'f', isWhite: true },
  { number: '4', letter: 'f', isWhite: false },
  { number: '5', letter: 'f', isWhite: true },
  { number: '6', letter: 'f', isWhite: false },
  { number: '7', letter: 'f', isWhite: true },
  { number: '8', letter: 'f', isWhite: false },
  { number: '1', letter: 'g', isWhite: false },
  { number: '2', letter: 'g', isWhite: true },
  { number: '3', letter: 'g', isWhite: false },
  { number: '4', letter: 'g', isWhite: true },
  { number: '5', letter: 'g', isWhite: false },
  { number: '6', letter: 'g', isWhite: true },
  { number: '7', letter: 'g', isWhite: false },
  { number: '8', letter: 'g', isWhite: true },
  { number: '1', letter: 'h', isWhite: true },
  { number: '2', letter: 'h', isWhite: false },
  { number: '3', letter: 'h', isWhite: true },
  { number: '4', letter: 'h', isWhite: false },
  { number: '5', letter: 'h', isWhite: true },
  { number: '6', letter: 'h', isWhite: false },
  { number: '7', letter: 'h', isWhite: true },
  { number: '8', letter: 'h', isWhite: false },
];

const ChessBoard = () => {
  const gridTemplateAreas = `'a8 b8 c8 d8 e8 f8 g8 h8'
    'a7 b7 c7 d7 e7 f7 g7 h7'
    'a6 b6 c6 d6 e6 f6 g6 h6'
    'a5 b5 c5 d5 e5 f5 g5 h5'
    'a4 b4 c4 d4 e4 f4 g4 h4'
    'a3 b3 c3 d3 e3 f3 g3 h3'
    'a2 b2 c2 d2 e2 f2 g2 h2'
    'a1 b1 c1 d1 e1 f1 g1 h1'`;

  const notationNumbersElements: JSX.Element[] = notationNumbers.map(
    (element) => {
      return <NotationElement key={uuidv4()} char={element} />;
    }
  );

  const notationLettersElements: JSX.Element[] = notationLetters.map(
    (letter) => {
      return <NotationElement key={uuidv4()} char={letter} />;
    }
  );

  const fieldsElements = fieldsInfo.map((field) => {
    return (
      <Field
        key={uuidv4()}
        isWhite={field.isWhite}
        position={`${field.letter}${field.number}`}
      />
    );
  });

  return (
    <section className={styles.wrapper}>
      <div className={styles.boardContainer}>
        <div className={styles.notationNumbers}>{notationNumbersElements}</div>
        <div className={styles.notationLetters}>{notationLettersElements}</div>
        <div
          className={styles.fieldsContainer}
          style={{ gridTemplateAreas: gridTemplateAreas }}
        >
          {fieldsElements}
        </div>
      </div>
    </section>
  );
};

export default ChessBoard;
