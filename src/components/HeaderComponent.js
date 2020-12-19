import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from 'react-native'

const HeaderComponent = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.txtTitle}>{props.title.toUpperCase()}</Text>
        </SafeAreaView>
    )
}

export default HeaderComponent
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00a46c',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff'
    }
})