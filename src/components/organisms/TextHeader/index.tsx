import {Image, Platform} from 'react-native';
import {Header, HeaderTitle, TouchableOpacity} from './styles';
import React from 'react';

interface TextHeaderProps {
  label?: string | null;
  onPress: () => void;
  style?: any;
  containerStyle?: any;
}

const TextHeader = ({
  label,
  onPress,
  style,
  containerStyle,
}: TextHeaderProps) => {
  return (
    <Header style={containerStyle}>
      <TouchableOpacity style={style} onPress={onPress}>
        <Image
          source={require('../../../assets/images/chevron-left.png')}
          style={{
            width: 10,
            height: 20,
            top: Platform.OS === 'ios' ? 0 : 'auto',
          }}
        />
      </TouchableOpacity>
      <HeaderTitle>{label}</HeaderTitle>
    </Header>
  );
};

export default TextHeader;
