import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import color from '../color';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems = [
    {
        title:'My Listings',
        icon:{
            name:'format-list-bulleted',
            backgroundColor: color.primary
        }
    },
    {
        title:'My Messages',
        icon:{
            name:'email',
            backgroundColor: color.secondary
        }
    },
]

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
        <View style={styles.container}>
        <ListItem
        title='lulu'
        subTitle='ProgrammingwiithMosh'
        image={require('../assets/mosh.jpg')}
        />
        </View>
        <View style={styles.container}>
            <FlatList
            data={menuItems}
            keyExtractor={item => item.title}
            ItemSeparatorComponent={ListItemSeparator}
            renderItem={({item})=>(
                <ListItem
                title={item.title}
                IconComponent={
                    <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                    />
                }
                />
            )}
            />
        </View>
        <View>
            <ListItem
            title='Log Out'
            IconComponent={
                <Icon
                name='logout'
                backgroundColor='yellow'
                />
            }
            />
        </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
screen:{
    backgroundColor:color.faded
},
  container: {
    marginVertical:20
  }
});

export default AccountScreen;