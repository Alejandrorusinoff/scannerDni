import React, {useEffect, useState} from 'react'
import { View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { setImgEmployee } from '../redux/imgEmployee';
import { setTitle } from '../redux/title';
import { useCamera } from 'react-native-camera-hooks';
import { getSearchAllEmployeeCovidData, updateEmployee } from '../axiosRequests/request'
import { firstNameUp } from '../generalFunctions/generalFunctions'
import { dataColumn } from '../data/datos';
import SingleEmployee from '../screens/singleEmployee'
import { useNavigation } from '@react-navigation/core';

const SingleEmployeeContainer = ({route}) => {
    const [dataCovid, setDataCovid] = useState([])
    const [tableHead, setTableHead] = useState([])
    const [imgCache, setImgCache] = useState('');
    const [{ cameraRef }, { takePicture }] = useCamera(null);
    const [widthArr, setWidthArr] = useState([250, 80, 80, 100, 80, 80, 80, 80, 90, 80, 80, 80, 80, 120, 130, 80, 80, 80, 110, 100, 100, 80,])
    const {name, lastName, dni, age, diretion, organizationName, _id, photo} = route.params.data
    const {user} = useSelector(state => state);
    const navigation = useNavigation()
    const dispatch = useDispatch()

    useEffect(() => {
        updateEmployee(dni, imgCache, user)
    }, [imgCache]);

    const takePhoto = () => {
        takePicture().then(data => {
            dispatch(setImgEmployee(data.uri))
            setImgCache(data.uri)
        })
        .catch(err => console.log(err))  
    }

    const foto = (fn, imgUri, refCam) => {
        navigation.navigate('CamaraContainer', {data: {fn, imgUri, refCam}})
    }

    useEffect(() => {
        dispatch(setTitle({name, lastName}))
        getSearchAllEmployeeCovidData(_id, user)
        .then(({data}) => {
            setDataCovid(data.dataCovid), 
            setTableHead(dataColumn)})
    },[])

    let dataCovidTable = []

    for (let i = 0; i < dataCovid.length; i++) {
        dataCovidTable.push([
            firstNameUp(dataCovid[i].organizationId.companyName),
            dataCovid[i].date,
            dataCovid[i].hour,
            dataCovid[i].temperature,
            dataCovid[i].smell,
            dataCovid[i].taste,
            dataCovid[i].cough,
            dataCovid[i].soreThroat,
            dataCovid[i].breathe,
            dataCovid[i].diarrhea,
            dataCovid[i].headache,
            dataCovid[i].vomits,
            dataCovid[i].musclePain,
            dataCovid[i].peopleCovid,
            dataCovid[i].lastDaysPeople,
            dataCovid[i].cancer,
            dataCovid[i].diabetes,
            dataCovid[i].liverDisease,
            dataCovid[i].chronicIllness,
            dataCovid[i].respiratoryDisease,
            dataCovid[i].heartDisease,
            dataCovid[i].lowDefenses,
        ])
    }
   
    return(    
        <View>
            <SingleEmployee name={name} lastName={lastName} dni={dni} age={age} diretion={diretion} organizationName={organizationName} _id={_id} tableHead={tableHead} widthArr={widthArr} dataCovid={dataCovid} dataCovidTable={dataCovidTable} photo={photo} foto={foto} takePhoto={takePhoto} cameraRef={cameraRef} imgCache={imgCache}/>
        </View> 
    )
}

export default SingleEmployeeContainer






