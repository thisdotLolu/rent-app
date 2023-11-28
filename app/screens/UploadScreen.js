import React from 'react';
import { Modal, Text } from 'react-native';
import { View, StyleSheet } from 'react-native';
import AppText from '../components/Text';
import * as Progress from 'react-native-progress';
import colors from '../config/colors';


function UploadScreen({progress=0,visible=false}) {
  return (
    <Modal
    visible={visible}
    >
        <View style={styles.container}></View>
        <AppText>
            {
            progress < 1 ?
            (<Progress/>):(
                <Text>Done!</Text>
            )
            } 
        </AppText>
    </Modal>
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    justifyContent:'center',
    flex:1
  }
});

export default UploadScreen;