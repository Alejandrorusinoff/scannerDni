/* import { useState, useEffect } from 'react';
import { useCamera } from 'react-native-camera-hooks';
import { useDispatch } from 'react-redux';
import { setImgEmployee } from '../redux/imgEmployee';

export const useTakePhoto = () => {
    const [{ cameraRef }, { takePicture }] = useCamera(null);
    const [imgCache, setImgCache] = useState('');
    const dispatch = useDispatch()

    useEffect(() => {}, [imgCache]);

    takePicture().then(data => {
        dispatch(setImgEmployee(data.uri))
        setImgCache(data.uri);
    })
    .catch(err => console.log(err))  

    return {imgCache, cameraRef}
}
 */
