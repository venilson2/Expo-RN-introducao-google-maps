import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 20px;
  position: absolute;
  z-index: 1;
  width: 100%;
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

export const ButtonSelected = styled.TouchableOpacity`
  background-color: #106093;
  padding: 10px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-width: 2px;
  border-color: #ddd;
`;

export const Card = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const TopText = styled.Text`
  font-size: 14px;
  color: white;
  margin-bottom: 4px;
`;

export const LineText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
  margin-bottom: 4px;
`;

export const SmallText = styled.Text`
  font-size: 10px;
  color: white;
`;

export const Badge = styled.View`
    border-radius: 8px;
    padding-horizontal: 12px;
    padding-vertical: 6px;
  `;

export const BadgeText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;
