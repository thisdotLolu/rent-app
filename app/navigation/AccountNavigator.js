import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";


const Stack = createStackNavigator();

export const AccountNavigator=()=>(
    <Stack.Navigator>
        <Stack.Screen name='Account' component={AccountScreen}/>
        <Stack.Screen name='Messages' component={MessagesScreen}/>
    </Stack.Navigator>
)


