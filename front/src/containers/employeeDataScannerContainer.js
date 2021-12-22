import React, {useState, useEffect} from 'react'
import { View } from 'react-native'
import { setEmployee } from '../redux/employee';
import { setAllPeople } from '../redux/allPeople';
import { useDispatch, useSelector } from 'react-redux';
import { postEmployeeAdd } from '../axiosRequests/request'
import { lowerValidation } from '../generalFunctions/generalFunctions';
import { postOrganizationEmployee } from '../axiosRequests/request'
import { useCamera } from 'react-native-camera-hooks';
import { msjFlash } from '../alertMessage/message';
import { setImgEmployee } from '../redux/imgEmployee';
import EmployeeDataScanner from '../screens/employeeDataScanner'
import styles from '../styles/employeeDataStyles';

const EmployeeDataScannerContainer = ({navigation, route}) => {
    const user = useSelector(state => state.user)
    const [{ cameraRef }, { takePicture }] = useCamera(null);
    const [imgCache, setImgCache] = useState('');
    const dni = route.params.data.BuscarEmpleado
    const dataScannerDni = route.params.data.arrDNI
    const dispatch = useDispatch()
    useEffect(() => {}, [imgCache]);

    function saveEmployee({ name, lastName, dni, age, diretion, organizationName, organizationId = user.company._id}) {
        if (imgCache) {
            postEmployeeAdd(
                imgCache,
                lowerValidation(name), 
                lowerValidation(lastName), 
                dni, 
                age, 
                lowerValidation(diretion), 
                lowerValidation(organizationName), 
                organizationId, 
                user)
            .then(({data}) => {dispatch(setEmployee(data))
                navigation.navigate('CovidEmployeeData1Container')
            })
            .catch(err => console.log(err))
        }
        else {msjFlash('Debe sacar foto al empleado', 'danger', 'danger')}
    }  

    const takePhoto = () => {
        takePicture().then(data => {
            dispatch(setImgEmployee(data.uri))
            setImgCache(data.uri);
        })
        .catch(err => console.log(err))  
    }

    const foto = (fn, imgUri, refCam) => {
        navigation.navigate('CamaraContainer', {data: {fn, imgUri, refCam}})
    }

    return(    
        <View style={styles.container}>
            <EmployeeDataScanner saveEmployee={saveEmployee} dni={dni} dataScannerDni={dataScannerDni} takePhoto={takePhoto} foto={foto} imgCache={imgCache} cameraRef={cameraRef}/>
        </View>
    )
}

export default EmployeeDataScannerContainer



