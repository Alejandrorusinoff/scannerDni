import React, {useEffect, useState} from 'react'
import {Text,  StyleSheet, View, ScrollView, TouchableOpacity, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import { setTitle } from '../redux/title';
import axios from 'axios';
import { Table, Row, Rows,} from 'react-native-table-component';

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
            console.log("dataCovid ----> ", data)
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
                    {/* <Text style={styles.title3}>Nombre: {employee.name}</Text>
                    <Text style={styles.title3}>Apellido: {employee.lastName}</Text> */}
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

const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        borderColor: 'rgba(0, 0, 121, 0.89)',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
        padding: 10,
    },
    bottonAndText: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
    },
    botton: {
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#87cefa',
        marginTop: '4%'
    },
    logo: {
        flex: 3, 
        borderWidth: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 150,
    },
    textRequired: {
        paddingLeft: 15,
        color: 'red'
    },
    title: {
        color: 'rgba(0, 0, 121, 0.89)', 
        fontSize: 20, textAlign: 'center'
    },
    title1: {
        color: 'rgba(0, 0, 121, 0.89)', 
        fontSize: 30, 
        textAlign: 'center',
        marginBottom: '5%',
    },
    title3: {
        color: 'rgba(0, 0, 121, 0.89)', 
        fontSize: 20, 
        padding: 5,
    },
    img: {
        flex: 3, 
        marginTop: '18%', 
        marginBottom: '18%'
    },
    img1: {
        color: '#6495ed', 
        textAlign: 'center'
    },
    container1: { 
        flex: 1, 
        padding: 16, 
        paddingTop: 16, 
        backgroundColor: '#fff' 
    },
    head: { 
        height: 60, 
        backgroundColor: '#f1f8ff',
        width: 2120,
    },
    btn: { 
        width: 58, 
        height: 18, 
        marginLeft: 15, 
        backgroundColor: '#c8e1ff', 
        borderRadius: 2 
    },
    btnText: { 
        textAlign: 'center' 
    }
});

export default SingleEmployee



