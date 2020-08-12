import React, {
  InputHTMLAttributes,
  useRef,
  useCallback,
  useState,
} from 'react';

import { InputContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isField, setIsField] = useState(false);

  const handleOnBlur = useCallback(() => {
    if (inputRef.current?.value) {
      setIsField(true);
    } else {
      setIsField(false);
    }
  }, []);

  return (
    <InputContainer isField={isField}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        onBlur={handleOnBlur}
        ref={inputRef}
        type="text"
        id={name}
        {...rest}
      />
    </InputContainer>
  );
};

export default Input;
