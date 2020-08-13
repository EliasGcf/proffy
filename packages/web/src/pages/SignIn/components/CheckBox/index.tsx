import React, {
  InputHTMLAttributes,
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import { useField } from '@unform/core';

import { CheckIcon } from '../../../../assets/images/icons';

import { CheckBoxIcon, LabelContainer } from './styles';

interface CheckBoxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  name: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ name, ...rest }) => {
  const [isChecked, setIsChecked] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue = false } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref: HTMLInputElement) => {
        return ref.checked || false;
      },
      setValue: (ref: HTMLInputElement, value: boolean) => {
        ref.checked = value;
        setIsChecked(value);
      },
      clearValue: (ref: HTMLInputElement) => {
        ref.checked = false;
        setIsChecked(false);
      },
    });
  }, [defaultValue, fieldName, registerField]);

  const handleToggleChecked = useCallback(() => {
    setIsChecked(state => !state);
  }, []);

  return (
    <LabelContainer htmlFor={name}>
      <CheckBoxIcon isChecked={isChecked}>
        <CheckIcon />
      </CheckBoxIcon>
      <input
        ref={inputRef}
        onChange={handleToggleChecked}
        defaultChecked={defaultValue}
        type="checkbox"
        id={name}
        {...rest}
      />
      Lembrar-me
    </LabelContainer>
  );
};

export default CheckBox;
