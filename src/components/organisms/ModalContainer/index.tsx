import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Image } from 'react-native';
import Button from '../../atoms/Button';

interface ModalContainer {
    modalVisible: boolean,
    setModalVisible: (item: boolean) => void,
    children?: React.ReactNode;
}

export default function ModalContainer({modalVisible, setModalVisible, children}: ModalContainer ){
    const styles = StyleSheet.create({
        modal: {
          justifyContent: 'flex-end',
        },
        modalContainer: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 10,
          flex: 1
        },
        buttonContainer: {
          marginTop: 20,
          paddingHorizontal: 16,
          paddingVertical: 8,
          borderRadius: 10,
        },
      });

    return (
      <Modal 
        visible={modalVisible} 
        animationType="slide"
        style={styles.modal}
      >
        <View style={styles.modalContainer}>
          {children}
          <View style={styles.buttonContainer}>
            <Button onPress={() => setModalVisible(false)} title='Fechar' />
          </View>
        </View>
      </Modal>
    );
}