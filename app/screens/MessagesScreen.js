import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Platform, StatusBar } from 'react-native';
import ListItem from '../components/ListItem';
import Constants from 'expo-constants';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

// console.log(Constants)  

//Constants.statusBarHeight


const initialMessages=[
    {
        id:1,
        title:'T1',
        description:'D1',
        image:require('../assets/mosh.jpg')
    },
    {
        id:2,
        title:'T2',
        description:'D2',
        image:require('../assets/mosh.jpg')
    },
    {
        id:3,
        title:'T3',
        description:'D3',
        image:require('../assets/mosh.jpg')
    },
]


function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = message =>{
        const newMessages = messages.filter(m=> m.id !== message.id)
        setMessages(newMessages);
    }

  return (
    // <SwipeListView></SwipeListView>
    <FlatList 
    data={messages}
    style={styles.container}
    keyExtractor={message => message.id.toString()}
    renderItem={({item})=> 
    (<ListItem
    onPress={()=>console.log('pressed', item)}
    title={item.title}
    subTitle={item.description}
    image={item.image}
    renderRightActions = {()=>
    <ListItemDeleteAction
    onPress={handleDelete}
    />
}
    />)}
    
    ItemSeparatorComponent={()=>
    <ListItemSeparator/>
    }
    refreshing={refreshing}
    onRefresh={()=>setMessages([
        {
            id:2,
            title:'T2',
            description:'D2',
            image:require('../assets/mosh.jpg')
        },
    ])}
    />
  );
}

const styles = StyleSheet.create({
  container: {

  },
});

export default MessagesScreen;