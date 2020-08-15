import React, { ButtonHTMLAttributes } from 'react';

import { ButtonContainer } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  isLoading = false,
  children,
  ...rest
}) => {
  return (
    <ButtonContainer {...rest}>
      {isLoading ? 'Carregando ...' : children}
    </ButtonContainer>
  );
};

export default Button;
