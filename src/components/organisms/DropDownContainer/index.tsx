import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';

interface DropDownContainer {
    setModalVisible: (item: boolean) => void,
    selectedValue: string | null
}

export default function DropDownContainer({selectedValue, setModalVisible}: DropDownContainer){

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
        dropdownText: {
          fontSize: 16,
          color: '#333',
        },
      });

    return (
        <View style={styles.dropdownContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={{ backgroundColor: 'white', padding: 10 }}>
            <Text style={styles.dropdownText} >{selectedValue ? selectedValue : 'Selecione a linha desejada'}</Text>
          </View>
        </TouchableOpacity> 
      </View>    
    );   
}