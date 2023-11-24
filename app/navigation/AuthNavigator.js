import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createStackNavigator()


const AuthNavigator =()=>(
    <Stack.Navigator
    
    >
        <Stack.Screen name='Welcome' component={WelcomeScreen} options={{
            headerShown:false
        }}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
    </Stack.Navigator>
)


export default AuthNavigator;
