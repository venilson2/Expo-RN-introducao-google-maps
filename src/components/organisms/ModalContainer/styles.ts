import styled from 'styled-components/native';
import Button from '../../atoms/Button';

export const Container = styled.View`
  border-radius: 20px;
  height: 40%;
  background-color: ${({theme}) => theme.colors.neutral_100};
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
  color: ${({theme}) => theme.colors.neutral_700};
`;

export const PlateContainer = styled.View`
  justify-content: center;
  flex: 1;
  margin: 0 10px;
`;

export const Info = styled.Text`
  font-size: 10px;
  color: ${({theme}) => theme.colors.neutral_700};
`;

export const InfoHour = styled.Text`
  font-size: 10px;
  color: ${({theme}) => theme.colors.neutral_100};
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
  color: ${({theme}) => theme.colors.neutral_700};
`;

export const Strong = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.secondary_400};
`;

export const Badge = styled.View`
    background-color: ${({theme}) => theme.colors.success};
    border-radius: 8px;
    padding: 6px 12px;
    `;
    
export const BadgeText = styled.Text`
  color: ${({theme}) => theme.colors.neutral_100};
  font-weight: bold;
  font-size: 16px;
`;

export const SmallInfo = styled.Text`
  font-size: 8px;
  color: ${({theme}) => theme.colors.secondary_100};
`;
