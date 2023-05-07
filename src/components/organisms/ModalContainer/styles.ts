import styled from 'styled-components/native';
import Button from '../../atoms/Button';

export const Container = styled.View`
  border-radius: 20px;
  height: 40%;
  background-color: #ccc;
  color: white;
  justify-content: flex-end;
  position: absolute;
  padding: 10px 24px;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ButtonContainer = styled.View`
  margin-top: 4px;
`;

export const StyledButton = styled(Button)`
  margin-top: 10px;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;

export const Plate = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const PlateContainer = styled.View`
  justify-content: center;
  flex: 1;
  margin: 0 10px;
`;

export const Info = styled.Text`
  font-size: 10px;
`;

export const InfoHour = styled.Text`
  font-size: 10px;
  color: white;
`;

export const AddressContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AddressInfo = styled.View`
  justify-content: center;
  flex: 1;
`;

export const AddressText = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const Strong = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;

export const Badge = styled.View`
    background-color: green;
    border-radius: 8px;
    padding: 6px 12px;
    `;
    
export const BadgeText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

export const SmallInfo = styled.Text`
  font-size: 8px;
`;
