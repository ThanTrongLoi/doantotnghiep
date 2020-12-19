import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Dimensions,
    Switch
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypos from 'react-native-vector-icons/Entypo'
import { firebaseApp } from '../../firebase/FBconfig'

const ButtonControls = () => {

    const itemRef = firebaseApp.database().ref('Switch');

    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const [isEnabled4, setIsEnabled4] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
    const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);

    const handleSubmitEvent = (child) => {
        switch (child) {
            case 'Pump1': {
                itemRef.child(child).set({
                    data: isEnabled ? 0 : 1
                })
            }
                break;
            case 'Pump2': {
                itemRef.child(child).set({
                    data: isEnabled2 ? 0 : 1
                })
            }
                break;
            case 'RainCover': {
                itemRef.child(child).set({
                    data: isEnabled3 ? 0 : 1
                })
            }
                break;
            case 'Light': {
                itemRef.child(child).set({
                    data: isEnabled4 ? 0 : 1
                })
            }
                break;
        }
    }
    const listenForPump1 = () => {
        itemRef.child('Pump1')
            .child('data')
            .on('value', snapshot => {
                if (snapshot.val() == 0) setIsEnabled(isEnabled)
                else if (snapshot.val() == 1) setIsEnabled(!isEnabled)
            })
    }
    const listenForPump2 = () => {
        itemRef.child('Pump2')
            .child('data')
            .on('value', (snapshot) => {
                if (snapshot.val() == 0) {
                    setIsEnabled2(isEnabled2)
                } else if (snapshot.val() == 1) {
                    setIsEnabled2(!isEnabled2)
                }
            })
    }
    const listenForRainCover = () => {
        itemRef.child('RainCover')
            .child('data')
            .on('value', (snapshot) => {
                if (snapshot.val() == 0) {
                    setIsEnabled3(isEnabled3)
                } else if (snapshot.val() == 1) {
                    setIsEnabled3(!isEnabled3)
                }
            })
    }
    const listenForLight = () => {
        itemRef.child('Light')
            .child('data')
            .on('value', (snapshot) => {
                if (snapshot.val() == 0) {
                    setIsEnabled4(isEnabled4)
                } else if (snapshot.val() == 1) {
                    setIsEnabled4(!isEnabled4)
                }
            })
    }
    useEffect(() => {
        listenForPump1()
        listenForPump2()
        listenForRainCover()
        listenForLight()
    }, [])
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.bottomBTN}>
            <View style={{
                marginTop: 30,
                marginBottom: 15,
                marginHorizontal: 30,
                backgroundColor: '#ffffff',
                flexDirection: 'row',
                borderRadius: 15,
                height: Dimensions.get('window').width / 4,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.25,
                shadowRadius: 10,
                elevation: 5
            }}>
                <Icon
                    name={isEnabled ? 'water' : 'pump'}
                    size={45}
                    color={'#00a46c'} />
                <View style={{
                    flex: 1,
                    marginLeft: 20
                }}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 20
                        }}
                    >Máy bơm 1</Text>
                    <Text>Trạng thái: {isEnabled ? 'Bật' : 'Tắt'}</Text>
                </View>
                <Switch
                    trackColor={isEnabled ? "#dedede" : "#81c784"}
                    thumbColor={isEnabled ? "#00a46c" : "grey"}
                    ios_backgroundColor="#dedede"
                    onValueChange={() => {
                        toggleSwitch();
                        // handlePump1()
                        handleSubmitEvent('Pump1')
                        // pump1Value();
                    }}
                    value={isEnabled}
                />
            </View>
            <View style={{
                marginVertical: 15,
                marginHorizontal: 30,
                backgroundColor: '#ffffff',
                flexDirection: 'row',
                borderRadius: 15,
                height: Dimensions.get('window').width / 4,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.25,
                shadowRadius: 10,
                elevation: 5
            }}>
                <Icon
                    name={isEnabled2 ? 'water' : 'pump'}
                    size={45}
                    color={'#00a46c'} />
                <View style={{
                    flex: 1,
                    marginLeft: 20
                }}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 20
                        }}
                    >Máy bơm 2</Text>
                    <Text>Trạng thái: {isEnabled2 ? 'Bật' : 'Tắt'}</Text>
                </View>
                <Switch
                    trackColor={isEnabled2 ? "#dedede" : "#81c784"}
                    thumbColor={isEnabled2 ? "#00a46c" : "grey"}
                    ios_backgroundColor="#dedede"
                    onValueChange={() => {
                        toggleSwitch2();
                        // handlePump2();
                        handleSubmitEvent('Pump2')
                        // handleSubmitEv÷ent('Pump2', isEnabled2)
                    }}
                    value={isEnabled2}
                />
            </View>
            <View style={{
                marginVertical: 15,
                marginHorizontal: 30,
                backgroundColor: '#ffffff',
                flexDirection: 'row',
                borderRadius: 15,
                height: Dimensions.get('window').width / 4,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.25,
                shadowRadius: 10,
                elevation: 5
            }}>
                <Icon
                    name={isEnabled3 ? 'umbrella' : 'umbrella-closed-outline'}
                    size={45}
                    color={'#00a46c'} />
                <View style={{
                    flex: 1,
                    marginLeft: 20
                }}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 20
                        }}
                    >Mái che</Text>
                    <Text>Trạng thái: {isEnabled3 ? 'Bật' : 'Tắt'}</Text>
                </View>
                <Switch
                    trackColor={isEnabled3 ? "#dedede" : "#81c784"}
                    thumbColor={isEnabled3 ? "#00a46c" : "grey"}
                    ios_backgroundColor="#dedede"
                    onValueChange={() => {
                        toggleSwitch3();
                        // handleRainCover()
                        handleSubmitEvent('RainCover')
                        // handleSubmitEvent('RainCover', isEnabled3)
                    }}
                    value={isEnabled3}
                />
            </View>
            <View style={{
                marginTop: 15,
                marginHorizontal: 30,
                backgroundColor: '#ffffff',
                flexDirection: 'row',
                borderRadius: 15,
                height: Dimensions.get('window').width / 4,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.25,
                shadowRadius: 10,
                elevation: 5
            }}>
                <Entypos
                    name={isEnabled4 ? 'light-up' : 'light-down'}
                    size={45}
                    color={'#00a46c'} />
                <View style={{
                    flex: 1,
                    marginLeft: 20
                }}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 20
                        }}
                    >Đèn</Text>
                    <Text>Trạng thái: {isEnabled4 ? 'Bật' : 'Tắt'}</Text>
                </View>
                <Switch
                    trackColor={isEnabled4 ? "#dedede" : "#81c784"}
                    thumbColor={isEnabled4 ? "#00a46c" : "grey"}
                    ios_backgroundColor="#dedede"
                    onValueChange={() => {
                        toggleSwitch4();
                        // handleLight();
                        handleSubmitEvent('Light')
                        // handleSubmitEvent('Light', isEnabled4)
                    }}
                    value={isEnabled4}
                />
            </View>
        </ScrollView>
    )
}

export default ButtonControls

const styles = StyleSheet.create({
    bottomBTN: {
        // marginTop: 20
    }
})