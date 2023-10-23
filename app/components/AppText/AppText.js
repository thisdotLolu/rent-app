import { Platform, StyleSheet, Text } from 'react-native'
import styles from './styles'


export function AppText({children,style}){
    return(
        <Text
        style={[styles.text,style]}
        >
            {children}
        </Text>
    )
}



