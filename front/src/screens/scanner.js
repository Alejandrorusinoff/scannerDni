import React, { useEffect, useState } from 'react';
import {AppRegistry, StyleSheet, Text, TouchableOpacity, Linking} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { setScannerDNI } from '../redux/scannerDNI';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'immer/dist/internal';
import { FLIPPED_ALIAS_KEYS } from '@babel/types';


const ScanScreen = ({route}) => {
    const [scannerDNI, setScannerDNI] = useState({})
    const [stateFlash, setStateFlash] = useState(false)
    const dispatch = useDispatch()

    const getDataScanner = route.params.getDataScanner
    const searchEmployeeDNI = route.params.searchEmployeeDNI
    const onSuccess1 = e => {
        let dni = e.data
        console.log("data ----> ", e.data)
        let arrDNI = dni.split("@")
        console.log("dni --->",arrDNI[4])
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

const styles = StyleSheet.create({
    buttonTouchable: {
      padding: 16
    }
});

export default ScanScreen;