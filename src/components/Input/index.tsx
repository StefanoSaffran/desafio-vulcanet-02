import React, { FC, InputHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerStyle?: Record<string, unknown>;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: FC<IInputProps> = ({
  icon: Icon,
  containerStyle = {},
  ...rest
}) => {
  return (
    <Container style={containerStyle}>
      {Icon && <Icon size={15} />}
      <input {...rest} />
    </Container>
  );
};

export default Input;
