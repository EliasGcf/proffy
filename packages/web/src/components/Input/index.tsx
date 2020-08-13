import React, {
  InputHTMLAttributes,
  useRef,
  useCallback,
  useState,
  useEffect,
} from 'react';
import { useField } from '@unform/core';

import { InputContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
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

  const handleOnBlur = useCallback(() => {
    if (inputRef.current?.value) {
      setIsField(true);
    } else {
      setIsField(false);
    }
  }, []);

  return (
    <InputContainer isField={isField} isErrored={!!error}>
      <label htmlFor={name}>{label}</label>
      <input
        onBlur={handleOnBlur}
        onFocus={clearError}
        ref={inputRef}
        type="text"
        defaultValue={defaultValue}
        id={name}
        {...rest}
      />
    </InputContainer>
  );
};

export default Input;
