import React from 'react';
import { Badge, BadgeText, Button, ButtonSelected, ButtonText, Card, Container, LineText, SmallText, TopText } from './styles';
import CoordinateResponse from '../../../interfaces/CoordinateResponse';
import { theme } from '../../../styles';

interface DropDownContainerProps {
    selectedValue: CoordinateResponse | null,
    onPress: () => void
}

export default function DropDownContainer({selectedValue,  onPress}: DropDownContainerProps){

  const colorStatus = selectedValue!.status === 'entrada' ? theme.colors.success : theme.colors.warning;

  return (
    <>
      {
        selectedValue ? (
          <Container>
            <ButtonSelected onPress={onPress}>
              <Card>
                <TopText>
                  Teste
                </TopText>
                <LineText>
                  {selectedValue.name}
                </LineText>
                <SmallText>
                  Clique novamente para alterar
                </SmallText>
              </Card>
              <Badge style={{backgroundColor: colorStatus }}>
                <BadgeText>
                  {selectedValue.status}
                </BadgeText>
              </Badge>
            </ButtonSelected>
          </Container>
        ) : (
          <Container>
            <Button onPress={onPress}>
              <ButtonText>
                {'Selecione a linha desejada'}
              </ButtonText>
            </Button>
          </Container>
        )
      }
    </>
  );
} 