import React, {useEffect, useState} from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { setTitle } from '../redux/title';
import { getSearchAllEmployeeCovidData } from '../axiosRequests/request'
import SingleEmployee from '../screens/singleEmployee'
import styles from '../styles/singleEmployeeStyles';

const SingleEmployeeContainer = ({route}) => {
    const [dataCovid, setDataCovid] = useState([])
    const [tableHead, setTableHead] = useState([])
    const [widthArr, setWidthArr] = useState([250, 80, 80, 100, 80, 80, 80, 80, 90, 80, 80, 80, 80, 120, 130, 80, 80, 80, 110, 100, 100, 80,])
    const {name, lastName, dni, age, diretion, organizationName, _id} = route.params.data
    const {user} = useSelector(state => state);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setTitle({name, lastName}))
        getSearchAllEmployeeCovidData(_id, user)
        .then(({data}) => {
            setDataCovid(data.dataCovid), 
            setTableHead(dataColumn)})
    },[])

    const elementButton = () => (
        <TouchableOpacity onPress={() => console.log('ordena por empresa')}>
          <View>
            <Text style={styles.btnText}>Empresa</Text>
          </View>
        </TouchableOpacity>
    );

    let dataColumn = [
        elementButton(),
        'Fecha',
        'Hora',
        'Temperatura',
        'Perdida del Olfato', 
        'Perdida del Gusto', 
        'Tos', 
        'Dolor de Garganta',
        'Problemas de Respitación', 
        'Diarrea', 
        'Dolor Cabeza', 
        'Vomitos', 
        'Dolor Muscular', 
        'Trabajó con personas con covid', 
        'Tuvo los ultimos días con gente con covid', 
        'Tengo/Tuvo cancer', 'Tengo diabetes', 
        'Enfermedad hepática', 
        'Enfermedad renal crónica', 
        'Enfermedad respiratoria', 
        'Enfermedad cardiológica', 
        'Baja Defensas',
    ]
    let dataCovidTable = []

    for (let i = 0; i < dataCovid.length; i++) {
        dataCovidTable.push([
            dataCovid[i].organizationId.companyName,
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
            <SingleEmployee name={name} lastName={lastName} dni={dni} age={age} diretion={diretion} organizationName={organizationName} _id={_id} tableHead={tableHead} widthArr={widthArr} dataCovid={dataCovid} dataCovidTable={dataCovidTable}/>
        </View> 
    )
}

export default SingleEmployeeContainer