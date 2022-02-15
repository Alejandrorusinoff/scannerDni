import React from 'react'
import {Text, View, TouchableOpacity, Image, StatusBar} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { RNCamera } from 'react-native-camera';
import { useNavigation } from '@react-navigation/core';
import styles from '../styles/camaraStyles'
import stylesHome from '../styles/homeStyles';

const Camara = ({ takePhoto, cameraRef, typeCamera, setTypeCamera, stateFlash, imgCache, stateViewCam, setStateViewCam, setStateFlash}) => {
const navigation = useNavigation()

    return(
        <>
            <StatusBar hidden={true}/>
            <TouchableOpacity onPress={() => setStateViewCam(!stateViewCam)} 
            style={styles.bottonTogle}>
                {stateViewCam ? 
                <View>
                <Text style={styles.textTogle}></Text>
                    <RNCamera
                        ref={cameraRef}
                        captureAudio={false}
                        flashMode={stateFlash ? RNCamera.Constants.FlashMode.on: RNCamera.Constants.FlashMode.off}
                        style={styles.camMin}
                        type={typeCamera ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back}>
                    </RNCamera>
                </View> : 
                    <Image
                        style={styles.tinyLogo}
                        source={{
                        uri: imgCache,
                        }}
                    />
                }
            </TouchableOpacity>

            {stateViewCam ? 
            <>
            <Image
                style={styles.imgMax}
                source={{
                uri: imgCache,
                }}
            /> 
            </>:
            <RNCamera
                ref={cameraRef}
                captureAudio={false}
                flashMode={stateFlash ? RNCamera.Constants.FlashMode.on: RNCamera.Constants.FlashMode.off}
                style={styles.preview}
                type={typeCamera ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back}>
                <View style={styles.containerCamara}>
                    <TouchableOpacity style={styles.capture} onPress={() => setStateFlash(!stateFlash)}>
                        <Icon 
                            name={stateFlash ? "flash-sharp" : "flash-off" }
                            size={50}
                            color={stateFlash ? 'rgb(234, 190, 63)' : 'white'}
                        />
                    </TouchableOpacity>  

                    <TouchableOpacity style={styles.capture} onPress={() => takePhoto()}>
                        <Icon 
                            name="ellipse"
                            size={80}
                            color='#FFFFFF'  
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.capture} onPress={() => {setTypeCamera(!typeCamera)}}>
                        <Icon
                            name="camera-reverse-outline" 
                            size={50}
                            color={'#FFFFFF'} 
                        />
                    </TouchableOpacity>
                </View>
            </RNCamera>
            }
        </>
    )
}

export default Camara

