import React, { TextareaHTMLAttributes } from 'react';

import { TextAreaContainer } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, name, ...rest }) => {
  return (
    <TextAreaContainer>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </TextAreaContainer>
  );
};

export default TextArea;
