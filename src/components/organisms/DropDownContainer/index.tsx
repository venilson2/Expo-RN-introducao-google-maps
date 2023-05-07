import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, ButtonText, Container } from './styles';

interface DropDownContainerProps {
    selectedValue: string | null,
    onPress: () => void
}

export default function DropDownContainer({selectedValue,  onPress}: DropDownContainerProps){

  const navigation = useNavigation();

      return (
        <Container>
          <Button onPress={onPress}>
            <ButtonText>
              {selectedValue ? selectedValue : 'Selecione a linha desejada'}
            </ButtonText>
          </Button>
        </Container>
      );
         
} 