import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Image } from 'react-native';

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
        closeButtonContainer: {
          position: 'absolute',
          top: 10,
          right: 10
        },
        closeButton: {
          width: 24,
          height: 24
        }
      });

    return (
      <Modal 
          visible={modalVisible} 
          animationType="slide"
          style={styles.modal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButtonContainer} >
              <Image source={require('../../../assets/images/close.png')} style={styles.closeButton} />
          </TouchableOpacity>
          {children}
        </View>
      </Modal>
    );
}