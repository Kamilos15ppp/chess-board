export interface IField {
  number: string;
  letter: string;
  isWhite: boolean;
}

export const NOTATION_NUMBERS: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

export const NOTATION_LETTERS: string[] = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
];
export const FIELDS_INFO: IField[] = [
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

export const GRID_TEMPLATE_AREAS: string = `'a8 b8 c8 d8 e8 f8 g8 h8'
'a7 b7 c7 d7 e7 f7 g7 h7'
'a6 b6 c6 d6 e6 f6 g6 h6'
'a5 b5 c5 d5 e5 f5 g5 h5'
'a4 b4 c4 d4 e4 f4 g4 h4'
'a3 b3 c3 d3 e3 f3 g3 h3'
'a2 b2 c2 d2 e2 f2 g2 h2'
'a1 b1 c1 d1 e1 f1 g1 h1'`;

export const GRID_TEMPLATE_AREAS_REVERSED: string = `'h1 g1 f1 e1 d1 c1 b1 a1'
'h2 g2 f2 e2 d2 c2 b2 a2'
'h3 g3 f3 e3 d3 c3 b3 a3'
'h4 g4 f4 e4 d4 c4 b4 a4'
'h5 g5 f5 e5 d5 c5 b5 a5'
'h6 g6 f6 e6 d6 c6 b6 a6'
'h7 g7 f7 e7 d7 c7 b7 a7'
'h8 g8 f8 e8 d8 c8 b8 a8'`;
