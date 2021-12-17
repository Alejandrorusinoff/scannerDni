/* import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/camaraStyles'

const CamaraMenu = ({navigation, takePhoto, positionCamara, typeCamera, setTypeCamera, stateFlash, flash,}) => {

    return(
        <> 
            <View style={styles.containerCamara}>
                <TouchableOpacity style={styles.capture}>
                    <Icon 
                        name={stateFlash ? "flash-sharp" : "flash-off" }
                        size={50}
                        color={stateFlash ? 'rgb(234, 190, 63)' : 'white'}
                        onPress={() => flash()}
                    />
                </TouchableOpacity>  

                <TouchableOpacity style={styles.capture}>
                    <Icon
                    name="ellipse"
                    size={80}
                    color={'#FFFFFF'}
                    onPress={() => takePhoto()}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.capture}>
                    <Icon
                    name="camera-reverse-outline" 
                    size={50}
                    color={'#FFFFFF'}
                    onPress={() => {setTypeCamera(!typeCamera), positionCamara()}}
                    />
                </TouchableOpacity>
            </View>
        </>
    )
}

export default CamaraMenu */