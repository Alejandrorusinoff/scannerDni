import React, {useState, useEffect} from 'react'
import { View } from 'react-native'
import axios from 'axios'
import { useCamera } from 'react-native-camera-hooks';
import Camara from '../screens/camara';

const CamaraContainer = ({navigation, route}) => {
    const [{ cameraRef }, { takePicture }] = useCamera(null);
    const [typeCamera, setTypeCamera] = useState(false);
    const [imgCache, setImgCache] = useState('');
    const [stateFlash, setStateFlash] = useState(false)
    const [stateViewCam, setStateViewCam] = useState(false)

    console.log(route.params.data)
   
    useEffect(() => {}, [imgCache]);
   
    const takePhoto = async () => {
        try {
          const data = await takePicture();
          console.log(data.uri)
          setImgCache(data.uri);
        } catch (err) {
          console.log(err);
        }
    }

    return(
        <View style={{width: '100%', height: '100%'}}>
            <Camara takePhoto={takePhoto} cameraRef={cameraRef} typeCamera={typeCamera} setTypeCamera={setTypeCamera} stateFlash={stateFlash} setStateFlash={setStateFlash}  imgCache={imgCache} stateViewCam={stateViewCam} setStateViewCam={setStateViewCam}/>
        </View>
    )
}

export default CamaraContainer

