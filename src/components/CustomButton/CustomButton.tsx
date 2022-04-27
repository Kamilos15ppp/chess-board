import React from 'react';
import { Button, NormalColors, NormalSizes } from '@nextui-org/react';

interface IProps {
  text: string;
  size?: NormalSizes;
  color?: NormalColors;
  bordered?: boolean;
  onClick: () => void;
}

const CustomButton: React.FC<IProps> = ({
  text,
  size,
  color,
  bordered = false,
  onClick,
}) => {
  return (
    <Button
      auto={size ? false : true}
      size={size}
      color={color}
      shadow
      bordered={bordered}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
