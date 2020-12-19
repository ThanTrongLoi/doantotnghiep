import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';

import ShowParameters from './showParameters'
import ButtonControls from './ButtonControls'

const HomeControlScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{
                height: '35%',
                backgroundColor: '#00a46c',
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40
            }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 50,
                        marginHorizontal: 20,
                        alignItems: 'center'
                    }}
                >
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 30,
                        color: '#fff'
                    }}>Trang chủ</Text>
                    <Icon
                        onPress={() => { alert('abc', 'xyz') }}
                        name={'alert-circle-outline'}
                        size={26}
                        color={'#ffffff'}
                    />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 30,
                        marginHorizontal: 20,
                        alignItems: 'center'
                    }}>
                    <Icon
                    // name={isEvent ? 'horizon-alt' : 'rains'}
                    />
                    {/* <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            width: '35%',
                            height: 45,
                            backgroundColor: '#ffffff',
                            borderRadius: 30,
                            alignItems: 'center',
                            justifyContent: 'space-evenly'
                        }}
                    >
                        <Icon name={'md-bar-chart-outline'} size={28} color={'#00a46c'} />
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 16
                            }}
                        >Thống kê </Text> */}
                    {/* </TouchableOpacity> */}
                </View>
            </View>
            <ShowParameters />
            <ButtonControls />
        </View>
    )
}

export default HomeControlScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})