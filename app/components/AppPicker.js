import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Modal, Button, TouchableWithoutFeedback, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import color from '../color';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';


function AppPicker({icon,items,selectedItem,onSelectItem,placeholder}) {
    const [modalVisible,setModalVisible] = useState(false)
  return (
    <React.Fragment>
    <TouchableWithoutFeedback
    onPress={()=>setModalVisible(true)}
    >
        <View 
    style={styles.container}>
        {icon && <MaterialCommunityIcons
        name={icon}
        size={20}
        color={color.black}
        style={styles.icon}
        />}
        <AppText
        style={styles.text}
        >{
            selectedItem? selectedItem.label : placeholder
        }</AppText>
        <MaterialCommunityIcons
        name='chevron-down'
        size={20}
        color={color.black}
       
        />
    </View>
    </TouchableWithoutFeedback>
    <Modal
    visible={modalVisible}
    animationType='slide'
    >
        <Screen>
        <Button
        title='Close'
        onPress={()=>setModalVisible(false)}
        />
        <FlatList
        data={items}
        keyExtractor={item => item.value.toString()}
        renderItem={({item})=>(
            <PickerItem
            label={item.label}
            onPress={()=>{
                setModalVisible(false)
                onSelectItem(item)
            }}
            />
         )}
        />
        </Screen>
    </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:color.faded,
    borderRadius: 25,
    flexDirection:'row',
    width:'100%',
    padding:15,
    marginVertical:10,
    alignItems:'center',
    justifyContent:'start'
  },
  textInput:{
    fontSize:16,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
  },
  icon:{
    marginRight:10
  },
  text:{
    flex:1
  }
});

export default AppPicker;