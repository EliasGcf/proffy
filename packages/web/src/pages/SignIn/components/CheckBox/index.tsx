import React, {
  InputHTMLAttributes,
  useState,
  useCallback,
  useRef,
} from 'react';

import { CheckIcon } from '../../../../assets/images/icons';

import { CheckBoxIcon, LabelContainer } from './styles';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  name,
  onChange,
  defaultChecked,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(!!defaultChecked);

  const handleToggleChecked = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(state => !state);

      onChange && onChange(event);
    },
    [onChange],
  );

  return (
    <LabelContainer htmlFor={name}>
      <CheckBoxIcon isChecked={isChecked}>
        <CheckIcon />
      </CheckBoxIcon>
      <input
        ref={inputRef}
        onChange={handleToggleChecked}
        defaultChecked={defaultChecked}
        type="checkbox"
        id={name}
        {...rest}
      />
      Lembrar-me
    </LabelContainer>
  );
};

export default CheckBox;
