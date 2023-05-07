import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  style?: object;
  disabled?: boolean;
}

const Button = ({ title, onPress, style, disabled }: Props) => {
  const containerStyle = disabled ? [styles.container, styles.disabled, style] : [styles.container, style];
  const textStyle = disabled ? [styles.text, styles.disabledText] : styles.text;

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={containerStyle}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2196F3',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 120,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  disabledText: {
    color: '#FFFFFF',
    opacity: 0.5,
  },
});

export default Button;
