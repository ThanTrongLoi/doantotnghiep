import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    ScrollView,
    Dimensions
} from 'react-native'

import ProgressCircle from 'react-native-progress-circle'
import IconAwsome5 from 'react-native-vector-icons/FontAwesome5'
import Icons from 'react-native-vector-icons/Ionicons'
import { firebaseApp } from '../../firebase/FBconfig'
import { set } from 'react-native-reanimated'
const ShowParameters = () => {
    const itemRef = firebaseApp.database().ref('Parameter');
    const [isTemp, setIsTemp] = useState('');
    const [isHumidity, setIsHumidity] = useState('')
    const [isWater, setIsWater] = useState('')
    const listenForTemp = () => {
        itemRef.child('Temp')
            .child('data')
            .on('value', snapshot => {
                setIsTemp(snapshot.val())
            })
    }
    const listenForHumidity = () => {
        itemRef.child('Humidity')
            .child('data')
            .on('value', snapshot => {
                setIsHumidity(snapshot.val())
            })
    }
    const listenForWater = () => {
        itemRef.child('WaterCm')
            .child('data')
            .on('value', snapshot => {
                setIsWater(snapshot.val())
            })
    }
    useEffect(() => {
        listenForTemp();
        listenForHumidity();
        listenForWater();
    }, [])
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            height={Dimensions.get('window').width / 2}
            marginTop={-65}>
            <View style={{
                flexDirection: 'row',
                backgroundColor: '#fff',
                alignItems: 'center',
                marginLeft: 50,
                marginRight: 50,
                width: Dimensions.get('window').width - 100,
                height: Dimensions.get('window').width / 3,
                borderRadius: 20,
                padding: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.25,
                shadowRadius: 10,
                elevation: 5
            }}>
                <IconAwsome5
                    name={'temperature-high'}
                    size={50}
                    color={'#00a46c'}
                />
                <View style={{ flex: 1, }}>
                    <Text
                        style={{
                            marginLeft: 15,
                            fontWeight: 'bold',
                            fontSize: 18,
                        }}
                    >Nhiệt độ môi trường</Text>
                    <Text
                        style={{
                            marginLeft: 15,
                            marginTop: 5
                        }}
                    >abc</Text>
                </View>
                <ProgressCircle
                    percent={isTemp}
                    radius={50}
                    borderWidth={12}
                    color={isTemp >= 50 ? 'red' : "#005005"}
                    shadowColor="#999"
                    bgColor="#ffffff"
                >
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: isTemp >= 50 ? 'red' : "#005005"
                    }}>{isTemp}°C</Text>
                </ProgressCircle>
            </View>
            <View style={{
                flexDirection: 'row',
                backgroundColor: '#fff',
                alignItems: 'center',
                marginLeft: 50,
                marginRight: 50,
                width: Dimensions.get('window').width - 100,
                height: Dimensions.get('window').width / 3,
                borderRadius: 20,
                padding: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.25,
                shadowRadius: 10,
                elevation: 5
            }}>
                <Icons
                    name={'water'}
                    size={50}
                    color={'#00a46c'}
                />
                <View style={{ flex: 1, }}>
                    <Text
                        style={{
                            marginLeft: 15,
                            fontWeight: 'bold',
                            fontSize: 18,
                        }}
                    >Độ ẩm môi trường</Text>
                    <Text
                        style={{
                            marginLeft: 15,
                            marginTop: 5
                        }}
                    >abc</Text>
                </View>
                <ProgressCircle
                    percent={isHumidity}
                    radius={50}
                    borderWidth={12}
                    color={isHumidity >= 50 ? 'red' : "#005005"}
                    shadowColor="#999"
                    bgColor="#ffffff"
                >
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: isHumidity >= 50 ? 'red' : "#005005"
                    }}>{isHumidity}%</Text>
                </ProgressCircle>
            </View>
            <View style={{
                flexDirection: 'row',
                backgroundColor: '#fff',
                alignItems: 'center',
                marginLeft: 50,
                marginRight: 50,
                width: Dimensions.get('window').width - 100,
                height: Dimensions.get('window').width / 3,
                borderRadius: 20,
                padding: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.25,
                shadowRadius: 10,
                elevation: 5
            }}>
                <Icons
                    name={'water'}
                    size={50}
                    color={'#00a46c'}
                />
                <View style={{ flex: 1, }}>
                    <Text
                        style={{
                            marginLeft: 15,
                            fontWeight: 'bold',
                            fontSize: 18,
                        }}
                    >Độ ẩm đất</Text>
                    <Text
                        style={{
                            marginLeft: 15,
                            marginTop: 5
                        }}
                    >abc</Text>
                </View>
                {/* <ProgressCircle
                    percent={isWater}
                    radius={60}
                    borderWidth={12}
                    color={isWater >= 50 ? 'red' : "#005005"}
                    shadowColor="#999"
                    bgColor="#ffffff"
                > */}
                <ProgressCircle
                    percent={isWater}
                    radius={50}
                    borderWidth={12}
                    color={isWater >= 50 ? 'red' : "#005005"}
                    shadowColor="#999"
                    bgColor="#ffffff"
                >
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: isWater >= 50 ? 'red' : "#005005"
                    }}>{isWater}%</Text>
                </ProgressCircle>
                {/* </ProgressCircle> */}
            </View>
        </ScrollView>
    )
}

export default ShowParameters
