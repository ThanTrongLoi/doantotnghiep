import React from 'react'
import {
    View,
    Text,
    StatusBar,
    Platform,
    StyleSheet,
} from 'react-native'

const MyStatusBar = ({ backgroundColor, ...props }) => {
    return (
        <View style={[styles.container, { backgroundColor }]}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

export default MyStatusBar

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
    container: {
        height: STATUSBAR_HEIGHT
    }
})