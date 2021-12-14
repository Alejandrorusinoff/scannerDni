import React, { useState } from 'react';
import {  TouchableOpacity, } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { upperOneStr } from '../generalFunctions/functions';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/scannerStyles';

const ScanScreen = ({ route }) => {
    const [stateFlash, setStateFlash] = useState(false)
    const searchEmployeeDNI = route.params.searchEmployeeDNI
    const onSuccess1 = e => {
        let dni = e.data
        let dataDNI = dni.split("@")
        let arrDNI = []
        for (let i = 0; i < dataDNI.length; i++) {
            arrDNI.push(upperOneStr(dataDNI[i]))
        }
        searchEmployeeDNI({"BuscarEmpleado":arrDNI[4], arrDNI})
    };

    const flash = () => {
        if(!stateFlash){
            setStateFlash(true)
        }
        else if(stateFlash){
            setStateFlash(false)
        }
    }
    return (
        <QRCodeScanner
            onRead={onSuccess1}
            showMarker={true}
            flashMode={stateFlash? RNCamera.Constants.FlashMode.torch : null}
            bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
                <Icon name={stateFlash ? "flash-sharp" : "flash-off" }
                    size={30}
                    color={stateFlash ? 'rgb(234, 190, 63)' : 'white'}
                    style={{alignSelf: 'center', marginLeft: 10,}}
                    onPress={() => flash()}
                />
            </TouchableOpacity>    
            }
        />
    );
}

export default ScanScreen;