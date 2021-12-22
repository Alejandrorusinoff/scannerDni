import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { convertDni} from '../generalFunctions/generalFunctions';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/scannerStyles';

const ScanScreen = ({ route }) => {
    const [stateFlash, setStateFlash] = useState(false)
    const searchEmployeeDNI = route.params.searchEmployeeDNI
    const onSuccess1 = e => {
        const arrDNI = convertDni(e.data)
        searchEmployeeDNI({"BuscarEmpleado":arrDNI[4], arrDNI})
    };

    return (
        <View style={styles.container}>
            <QRCodeScanner
                onRead={onSuccess1}
                showMarker={true}
                flashMode={stateFlash? RNCamera.Constants.FlashMode.torch : null}
                autoFocus={RNCamera.Constants.AutoFocus.on}
                style={styles.preview}
                bottomContent={
                <TouchableOpacity style={styles.buttonTouchable}>
                    <Icon 
                        name={stateFlash ? "flash-sharp" : "flash-off" }
                        size={30}
                        color={stateFlash ? 'rgb(234, 190, 63)' : 'white'}
                        style={{alignSelf: 'center', marginLeft: 10,}}
                        onPress={() => setStateFlash(!stateFlash)}
                    />
                </TouchableOpacity>    
                }
            />
        </View>
    );
}

export default ScanScreen;