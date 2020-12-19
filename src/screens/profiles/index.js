import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import HeaderComponent from '../../components/HeaderComponent'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ScrollView } from 'react-native-gesture-handler'

const ProfileScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <View style={{
                height: '25%',
                backgroundColor: '#00a46c',
                // borderBottomLeftRadius: 50,
                borderBottomRightRadius: 200,
                paddingTop: 60,
                paddingLeft: 20
            }}>
                <Image
                    style={{
                        height: 120,
                        width: 120,
                        borderRadius: 60,
                        borderWidth: 4,
                        borderColor: 'grey',
                        position: 'absolute',
                        bottom: -30,
                        right: 20
                    }}
                    source={require('../../assets/images/avt.jpg')} />
                <View>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: '#ffffff'
                    }}>Họ và tên</Text>
                </View>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#ffffff'
                }}>abc@gmail.com</Text>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        backgroundColor: '#ffffff',
                        width: Dimensions.get('window').width / 3.5,
                        height: 45,
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        marginTop: 30,
                        marginLeft: 60,
                        borderRadius: 5,
                        shadowColor: '#000000',
                        shadowOffset: { width: 2, height: 2 },
                        shadowOpacity: 0.45,
                        shadowRadius: 10
                    }}
                >
                    <Ionicons
                        name={'ios-camera-outline'}
                        size={26}
                        color={'#00a46c'}
                    />
                    <Text style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: '#00a46c'
                    }}>Đổi ảnh</Text>
                </TouchableOpacity>

            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginRight: 120,
                marginLeft: 10,
                marginTop: 20
            }}>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        backgroundColor: '#00a46c',
                        width: Dimensions.get('window').width / 3.5,
                        height: 45,
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        borderRadius: 5,
                        shadowColor: '#000000',
                        shadowOffset: { width: -2, height: 2 },
                        shadowOpacity: 0.45,
                        shadowRadius: 10
                    }}
                >
                    <MaterialIcon
                        name={'account-edit-outline'}
                        size={26}
                        color={'#ffffff'}
                    />
                    <Text style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: '#ffffff'
                    }}>Chỉnh sửa</Text>
                </TouchableOpacity>

            </View>
            <ScrollView>
                <View>
                    
                </View>
            </ScrollView>
        </View>
    )
}

export default ProfileScreen
