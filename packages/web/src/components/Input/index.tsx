import React, {
  InputHTMLAttributes,
  useRef,
  useCallback,
  useState,
  useEffect,
} from 'react';
import { useField } from '@unform/core';

import { InputContainer, Label, SInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  disabled,
  onChange,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isField, setIsField] = useState(false);
  const {
    fieldName,
    defaultValue = '',
    error,
    registerField,
    clearError,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleOnBlur = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e);

      if (inputRef.current?.value) {
        setIsField(true);
      } else {
        setIsField(false);
      }
    },
    [onChange],
  );

  return (
    <InputContainer isDisabled={disabled} isField={isField} isErrored={!!error}>
      <Label isDisabled={disabled} isField={isField} htmlFor={name}>
        {placeholder}
      </Label>
      <SInput
        isField={isField}
        onChange={handleOnBlur}
        onFocus={clearError}
        ref={inputRef}
        type="text"
        defaultValue={defaultValue}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
      />
    </InputContainer>
  );
};

export default Input;
