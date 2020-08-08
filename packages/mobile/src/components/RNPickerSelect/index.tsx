import React, { useMemo } from 'react';
import PickerSelect, {
  PickerSelectProps,
  PickerStyle,
} from 'react-native-picker-select';
import { Feather } from '@expo/vector-icons';

interface RNPickerSelectProps extends PickerSelectProps {
  name?: string;
}

const RNPickerSelect: React.FC<RNPickerSelectProps> = ({ items, ...rest }) => {
  const style = useMemo<PickerStyle>(() => {
    return {
      viewContainer: {
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
      },
    };
  }, []);

  return (
    <PickerSelect
      items={items}
      placeholder={{ label: 'Selecione o dia', value: '' }}
      style={style}
      Icon={() => <Feather name="chevron-down" size={20} color="#000" />}
      {...rest}
    />
  );
};

export default RNPickerSelect;
