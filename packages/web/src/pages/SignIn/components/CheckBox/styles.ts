import styled from 'styled-components';
import { darken } from 'polished';

interface CheckBoxIconProps {
  isChecked: boolean;
}

export const CheckBoxIcon = styled.div<CheckBoxIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.4rem;
  width: 2.4rem;
  border-radius: 0.8rem;
  background: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.secondary : theme.colors.textComplement};

  transition: background 0.3s;

  margin-right: 1.6rem;

  svg {
    opacity: ${({ isChecked }) => (isChecked ? '1' : '0')};
    transition: opacity 0.2s;
  }
`;

export const LabelContainer = styled.label`
  font: 1.4rem Poppins;
  color: ${({ theme }) => theme.colors.textComplement};
  cursor: pointer;

  display: flex;
  align-items: center;

  input {
    display: none;
  }

  transition: opacity 0.2s;

  &:hover {
    color: ${({ theme }) => darken(0.3, theme.colors.textComplement)};

    ${CheckBoxIcon} {
      background: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
