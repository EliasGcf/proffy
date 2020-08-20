import React, { InputHTMLAttributes, useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { LabelContainer, Input } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  labelStyle?: React.CSSProperties;
}

const InputWithLabel: React.FC<InputProps> = ({
  name,
  label,
  className,
  labelStyle,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue = '', error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <LabelContainer style={labelStyle} className={className}>
      {label}
      <Input ref={inputRef} defaultValue={defaultValue} {...rest} />
      {error && <span>{error}</span>}
    </LabelContainer>
  );
};

export default InputWithLabel;
