import React from 'react'
import {Text, View, TouchableOpacity, Image} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { RNCamera } from 'react-native-camera';
import styles from '../styles/camaraStyles'

const Camara = ({navigation, takePhoto, cameraRef, typeCamera, setTypeCamera, stateFlash, imgCache, stateViewCam, setStateViewCam, setStateFlash}) => {

    return(
        <>
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
            <Image
                style={styles.imgMax}
                source={{
                uri: imgCache,
                }}
            /> :
            <RNCamera
                ref={cameraRef}
                captureAudio={false}
                flashMode={stateFlash ? RNCamera.Constants.FlashMode.on: RNCamera.Constants.FlashMode.off}
                style={styles.preview}
                type={typeCamera ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back}>
                <View style={styles.containerCamara}>
                    <TouchableOpacity style={styles.capture}>
                        <Icon 
                            name={stateFlash ? "flash-sharp" : "flash-off" }
                            size={50}
                            color={stateFlash ? 'rgb(234, 190, 63)' : 'white'}
                            onPress={() => setStateFlash(!stateFlash)}
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
                        onPress={() => {setTypeCamera(!typeCamera)}}
                        />
                    </TouchableOpacity>
                </View>
            </RNCamera>
            }
        </>
    )
}

export default Camara

