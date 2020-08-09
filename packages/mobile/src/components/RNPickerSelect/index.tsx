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
        paddingLeft: 8,
        borderRadius: 8,
        justifyContent: 'center',
        marginTop: 4,
      },
      inputIOSContainer: {
        paddingLeft: 8,
        height: '100%',
        justifyContent: 'center',
      },
      iconContainer: {
        height: '100%',
        justifyContent: 'center',
        marginRight: 16,
      },
    };
  }, []);

  return (
    <PickerSelect
      items={items}
      placeholder={{ label: 'Selecione o dia', value: '', color: '#ccc' }}
      style={style}
      doneText="Selecionar"
      Icon={() => (
        <Feather
          name="chevron-down"
          size={20}
          color="#000"
          style={{ height: 20 }}
        />
      )}
      {...rest}
    />
  );
};

export default RNPickerSelect;
