import React, {useState, useEffect} from 'react'
import { View } from 'react-native'
import { setEmployee } from '../redux/employee';
import { useDispatch, useSelector } from 'react-redux';
import { postEmployeeAdd } from '../axiosRequests/request'
import { lowerValidation } from '../generalFunctions/generalFunctions';
import { useCamera } from 'react-native-camera-hooks';
import { msjFlash } from '../alertMessage/message';
import { setImgEmployee } from '../redux/imgEmployee';
import EmployeeData from '../screens/employeeData';
import styles from '../styles/employeeDataStyles';

const EmployeeDataContainer = ({navigation, route}) => {
    const [{ cameraRef }, { takePicture }] = useCamera(null);
    const [imgCache, setImgCache] = useState('');
    const user = useSelector(state => state.user)
    const dni = route.params.data.BuscarEmpleado
    const employee = useSelector(state => state.employee)
    const dispatch = useDispatch()

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
                .then(({data}) => {
                    const employeeId = data.employee._id
                    dispatch(setEmployee([...employee, data.employee]))
                    navigation.navigate('CovidEmployeeData1Container',{dni, employeeId})
                })
            .catch(err => console.log(err))
        }
        else {msjFlash('Debe sacar foto al empleado', 'danger', 'danger')}
    }

    useEffect(() => {}, [imgCache])

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
            <EmployeeData saveEmployee={saveEmployee} dni={dni} takePhoto={takePhoto} foto={foto} imgCache={imgCache} cameraRef={cameraRef}/>
        </View>
    )
}

export default EmployeeDataContainer