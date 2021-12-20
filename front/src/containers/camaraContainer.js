import React, {useEffect, useState} from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux';
import Camara from '../screens/camara';

const CamaraContainer = ({navigation, route}) => {
  const [typeCamera, setTypeCamera] = useState(false);
  const [stateFlash, setStateFlash] = useState(false)
  const [stateViewCam, setStateViewCam] = useState(false)
  const imgEmployee = useSelector(state => state.imgEmployee)

  const takePhoto = route.params.data.fn
  const cameraRef = route.params.data.refCam

  return(
    <View style={{width: '100%', height: '100%'}}>
      <Camara takePhoto={takePhoto} cameraRef={cameraRef} typeCamera={typeCamera} setTypeCamera={setTypeCamera} stateFlash={stateFlash} setStateFlash={setStateFlash} imgCache={imgEmployee} stateViewCam={stateViewCam} setStateViewCam={setStateViewCam}/>
    </View>
  )
}

export default CamaraContainer

