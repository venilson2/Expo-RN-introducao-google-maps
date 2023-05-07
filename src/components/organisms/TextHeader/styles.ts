import styled from 'styled-components/native';

export const Header = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: ${({theme}) => theme.colors.neutral_900};
  font-size: 24px;
  text-align: center;
  margin: 10px auto;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  position: absolute;
  padding-top: 10px;
  padding-bottom: 10px;
`;
