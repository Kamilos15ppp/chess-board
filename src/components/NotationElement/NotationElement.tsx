import React from 'react';

type Props = {
  char: number | string;
};

const NotationElement: React.FC<Props> = ({ char }) => {
  const charText: string =
    typeof char === 'string' ? char.toUpperCase() : char.toString();

  return <span>{charText}</span>;
};

export default NotationElement;
