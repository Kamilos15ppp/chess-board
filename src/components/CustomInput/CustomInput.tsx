import React from 'react';
import { Input } from '@nextui-org/react';

interface IProps {
  labelPlaceholder: string;
}

const CustomInput: React.FC<IProps> = ({ labelPlaceholder }) => {
  return (
    <>
      <Input
        clearable
        rounded
        status='primary'
        labelPlaceholder={labelPlaceholder}
      />
    </>
  );
};

export default CustomInput;
