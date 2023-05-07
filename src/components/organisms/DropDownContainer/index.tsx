import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';

interface DropDownContainerProps {
    setModalVisible: (item: boolean) => void,
    selectedValue: string | null
}

export default function DropDownContainer({selectedValue, setModalVisible}: DropDownContainerProps){

    const styles = StyleSheet.create({
        dropdownContainer: {
          marginTop: 60,
          position: 'absolute',
          zIndex: 1,
          width: '90%',
          alignSelf: 'center',
          padding: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.10,
          shadowRadius: 1,
          elevation: 24,
        },
        dropdownButton: {
          backgroundColor: '#FFF',
          padding: 10,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 2,
          borderColor: '#DDD',
        },
        dropdownText: {
          fontSize: 16,
          color: '#333',
        },
      });

    return (
        <View style={styles.dropdownContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={styles.dropdownButton}>
            <Text style={styles.dropdownText} >{selectedValue ? selectedValue : 'Selecione a linha desejada'}</Text>
          </View>
        </TouchableOpacity> 
      </View>    
    );   
} 