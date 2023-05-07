import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 60px;
  position: absolute;
  z-index: 1;
  width: 90%;
  align-self: center;
  padding: 10px;
  elevation: 24;
`;

export const Button = styled.TouchableOpacity`
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-color: #ddd;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #333;
`;
