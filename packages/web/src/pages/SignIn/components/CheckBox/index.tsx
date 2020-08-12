import React, { InputHTMLAttributes, useState, useCallback } from 'react';

import { CheckBoxIcon, LabelContainer } from './styles';
import { CheckIcon } from '../../../../assets/images/icons';

interface CheckBoxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  name: string;
  label: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ name, label, ...rest }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChecked = useCallback(() => {
    setIsChecked(state => !state);
  }, []);

  return (
    <LabelContainer htmlFor={`${name}`}>
      <CheckBoxIcon isChecked={isChecked}>
        <CheckIcon />
      </CheckBoxIcon>
      <input
        onChange={handleToggleChecked}
        type="checkbox"
        id={`${name}`}
        name={`${name}`}
        {...rest}
      />
      {label}
    </LabelContainer>
  );
};

export default CheckBox;
