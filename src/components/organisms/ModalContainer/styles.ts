import styled from 'styled-components/native';
import Button from '../../atoms/Button';

export const Container = styled.View`
  border-radius: 20px;
  padding: 10px;
  height: 30%;
  background-color: red;
  color: white;
  justify-content: flex-end;
  position: absolute;
  padding: 16px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
`;

export const ButtonContainer = styled.View`
  margin-top: 20px;
  padding-vertical: 8px;
  border-radius: 10px;
`;

export const StyledButton = styled(Button)`
  margin-top: 10px;
`;
