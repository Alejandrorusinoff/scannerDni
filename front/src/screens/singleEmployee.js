import React, {useEffect, useState} from 'react'
import {Text, View, ScrollView, TouchableOpacity, } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import { setTitle } from '../redux/title';
import axios from 'axios';
import { Table, Row, Rows,} from 'react-native-table-component';
import styles from '../styles/singleEmployeeStyles';

const SingleEmployee = ({route}) => {
    const [tableHead, setTableHead] = useState([])
    const [widthArr, setWidthArr] = useState([250, 80, 80, 100, 80, 80, 80, 80, 90, 80, 80, 80, 80, 120, 130, 80, 80, 80, 110, 100, 100, 80,])
    const [dataCovid, setDataCovid] = useState([])
    const {name, lastName, dni, age, diretion, organizationName, _id} = route.params.data
    const {user, employee, allPeople} = useSelector(state => state);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setTitle({name, lastName}))
        axios.get(`http://localhost:3001/api/employee/searchAllEmployeeCovidData/${_id}`,
        {headers: {authorization: `Bearer ${user.token}`}},
        )
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
            <ScrollView showsVerticalScrollIndicator={false}> 
            <Text style={styles.title1}>{name} {lastName}</Text>
                <View style={{flex: 3}}>
                    <View>
                        <Icon name="person" size={150} style={styles.img1}></Icon>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.title3}>N° Documento: {dni}</Text>
                        <Text style={styles.title3}>Edad: {age}</Text>
                        <Text style={styles.title3}>Domicilio: {diretion}</Text>
                        <Text style={styles.title3}>Empresa: {organizationName}</Text>
                    </View>
                </View>
                <View style={styles.bottonAndText}>
                    {/* <TouchableOpacity style={styles.botton}>
                        <Text>Vincular a la organización</Text>
                    </TouchableOpacity> */}
                </View>
                {dataCovid.length ? 
                    <ScrollView horizontal={true}>
                    <View style={styles.container1}>
                        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                        <Row data={tableHead} style={styles.head} textStyle={{textAlign: 'center'}} widthArr={widthArr}/>
                        <Rows data={dataCovidTable} textStyle={{textAlign: 'center'}} widthArr={widthArr}/>
                    </Table>
                    </View>
                    </ScrollView> : null    
                }
            </ScrollView>
        </View> 
    )
}

export default SingleEmployee



