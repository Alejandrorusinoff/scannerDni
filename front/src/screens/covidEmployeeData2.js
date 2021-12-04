import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';
import CheckBoxText from '../components/ChecKBoxText/checKBoxText';
import { setDataCovid } from '../redux/dataCovid';
import axios from 'axios';
import { showAlert, closeAlert } from "react-native-customisable-alert";

const CovidEmployeeData2 = ({navigation, route}) => {
    const [checkboxState0, setCheckboxState0] = React.useState(false);
    const [role0, setRole0] = useState('no');
    const [checkboxState1, setCheckboxState1] = React.useState(false);
    const [role1, setRole1] = useState('no');
    const [checkboxState2, setCheckboxState2] = React.useState(false);
    const [role2, setRole2] = useState('no');
    const [checkboxState3, setCheckboxState3] = React.useState(false);
    const [role3, setRole3] = useState('no');
    const [checkboxState4, setCheckboxState4] = React.useState(false);
    const [role4, setRole4] = useState('no');
    const [checkboxState5, setCheckboxState5] = React.useState(false);
    const [role5, setRole5] = useState('no');
    const [checkboxState6, setCheckboxState6] = React.useState(false);
    const [role6, setRole6] = useState('no');
    const [checkboxState7, setCheckboxState7] = React.useState(false);
    const [role7, setRole7] = useState('no');
    const [checkboxState8, setCheckboxState8] = React.useState(false);
    const [role8, setRole8] = useState('no');
    
    const {temperature,smell,taste,cough,soreThroat,breathe,diarrhea,headache,vomits,musclePain,} = route.params

    const companyId = useSelector(state => state.user.company._id);
    const {user} = useSelector(state => state);
    const dni = useSelector(state => state.employee.employee.dni)
    const employeeId = useSelector(state => state.employee.employee._id)

    console.log("user ---> ",companyId)
    console.log("route.params.data ---> ", dni, employeeId)

    const datos2 = [
        'Trabajo o convivo con una persona que actualmente es caso confirmado de COVID-19',
        'Pasé en los ultimos 14 días al menos de 15 mínutos cerca de una persona que actualmente es caso confirmado COVID-19',
        'Tengo / tuve cáncer',
        'Tengo diabetes',
        'Tengo alguna enfermedad hepática',
        'Tengo enfermedad renal crónica',
        'Tengo alguna enfermedad respiratoria',
        'Tengo alguna enfermedad cardiológica',
        'Tengo alguna condición que baja las defensas',
    ]

    /* function saveDataCovidDataBase(temperature,smell,taste,cough,soreThroat,breathe,diarrhea,headache,vomits,musclePain,peopleCovid,lastDaysPeople,cancer,diabetes,liverDisease,chronicIllness,respiratoryDisease,heartDisease,lowDefenses) {
        dispatch(setDataCovid({temperature,smell,taste,cough,soreThroat,breathe,diarrhea,headache,vomits,musclePain,peopleCovid,lastDaysPeople,cancer,diabetes,liverDisease,chronicIllness,respiratoryDisease,heartDisease,lowDefenses}))
        navigation.navigate('Home')
    } */

    function saveDataCovidDataBase(temperature,smell,taste,cough,soreThroat,breathe,diarrhea,headache,vomits,musclePain,dni,employeeId,peopleCovid,lastDaysPeople,cancer,diabetes,liverDisease,chronicIllness,respiratoryDisease,heartDisease,lowDefenses, organizationId) {
        console.log({temperature,smell,taste,cough,soreThroat,breathe,diarrhea,headache,vomits,musclePain,dni,employeeId,peopleCovid,lastDaysPeople,cancer,diabetes,liverDisease,chronicIllness,respiratoryDisease,heartDisease,lowDefenses, organizationId})
        axios.post('http://localhost:3001/api/employee/covidData',
        {
            temperature,
            smell,
            taste,
            cough,
            soreThroat,
            breathe,
            diarrhea,
            headache,
            vomits,
            musclePain,
            dni, 
            employeeId,
            peopleCovid,
            lastDaysPeople,
            cancer,
            diabetes,
            liverDisease,
            chronicIllness,
            respiratoryDisease,
            heartDisease,
            lowDefenses,
            organizationId,
        },
        {headers: {authorization: `Bearer ${user.token}`}})
        .then(() => {
            showAlert({
                title:"Exelente",
                message: "Datos cargados exitosamente",
                alertType: 'success',
                onPress: () => {
                    navigation.navigate('Home')
                  closeAlert()
                }
            })
        })
        .catch(err => console.log(err))
    }

    const handleYesOp0 = () => {
        if (!checkboxState0) {
            setCheckboxState0(!checkboxState0);
            setRole0('si');
        }
        else{
            setCheckboxState0(!checkboxState0);
            setRole0('no');
        }
    };
    const handleYesOp1 = () => {
        if (!checkboxState1) {
            setCheckboxState1(!checkboxState1);
            setRole1('si');
        }
        else{
            setCheckboxState1(!checkboxState1);
            setRole1('no');
        }
    };
    const handleYesOp2 = () => {
        if (!checkboxState2) {
            setCheckboxState2(!checkboxState2);
            setRole2('si');
        }
        else{
            setCheckboxState2(!checkboxState2);
            setRole2('no');
        }
    };
    const handleYesOp3 = () => {
        if (!checkboxState3) {
            setCheckboxState3(!checkboxState3);
            setRole3('si');
        }
        else{
            setCheckboxState3(!checkboxState3);
            setRole3('no');
        }
    };
    const handleYesOp4 = () => {
        if (!checkboxState4) {
            setCheckboxState4(!checkboxState4);
            setRole4('si');
        }
        else{
            setCheckboxState4(!checkboxState4);
            setRole4('no');
        }
    };
    const handleYesOp5 = () => {
        if (!checkboxState5) {
            setCheckboxState5(!checkboxState5);
            setRole5('si');
        }
        else{
            setCheckboxState5(!checkboxState5);
            setRole5('no');
        }
    };
    const handleYesOp6 = () => {
        if (!checkboxState6) {
            setCheckboxState6(!checkboxState6);
            setRole6('si');
        }
        else{
            setCheckboxState6(!checkboxState6);
            setRole6('no');
        }
    };
    const handleYesOp7 = () => {
        if (!checkboxState7) {
            setCheckboxState7(!checkboxState7);
            setRole7('si');
        }
        else{
            setCheckboxState7(!checkboxState7);
            setRole7('no');
        }
    };
    const handleYesO8 = () => {
        if (!checkboxState8) {
            setCheckboxState8(!checkboxState8);
            setRole8('si');
        }
        else{
            setCheckboxState8(!checkboxState8);
            setRole8('no');
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}> 
                <View>
                    <Text style={styles.title1}>Autoevaluación</Text>
                    <Text style={styles.text}>Si tu situación de salud contempla algunas de las siguientes opciones, seleccionrá las que correspondan</Text>
                        <Text style={styles.title2}>{datos2[0]}</Text>
                        <CheckBoxText
                            isChecked={checkboxState0}
                            onPress={handleYesOp0}
                            style={{padding: 5}}
                        /> 
                        <Text style={styles.title2}>{datos2[1]}</Text>
                        <CheckBoxText
                            isChecked={checkboxState1}
                            onPress={handleYesOp1}
                            style={{padding: 5}}
                        /> 
                        <Text style={styles.title2}>{datos2[2]}</Text>
                        <CheckBoxText
                            isChecked={checkboxState2}
                            onPress={handleYesOp2}
                            style={{padding: 5}}
                        /> 
                        <Text style={styles.title2}>{datos2[3]}</Text>
                        <CheckBoxText
                            isChecked={checkboxState3}
                            onPress={handleYesOp3}
                            style={{padding: 5}}
                        /> 
                        <Text style={styles.title2}>{datos2[4]}</Text>
                        <CheckBoxText
                            isChecked={checkboxState4}
                            onPress={handleYesOp4}
                            style={{padding: 5}}
                        /> 
                        <Text style={styles.title2}>{datos2[5]}</Text>
                        <CheckBoxText
                            isChecked={checkboxState5}
                            onPress={handleYesOp5}
                            style={{padding: 5}}
                        /> 
                        <Text style={styles.title2}>{datos2[6]}</Text>
                        <CheckBoxText
                            isChecked={checkboxState6}
                            onPress={handleYesOp6}
                            style={{padding: 5}}
                        /> 
                        <Text style={styles.title2}>{datos2[7]}</Text>
                        <CheckBoxText
                            isChecked={checkboxState7}
                            onPress={handleYesOp7}
                            style={{padding: 5}}
                        /> 
                        <Text style={styles.title2}>{datos2[8]}</Text>
                        <CheckBoxText
                            isChecked={checkboxState8}
                            onPress={handleYesO8}
                            style={{padding: 5}}
                        /> 
                    <TouchableOpacity style={styles.botton} /* onPress={handleSubmit(onSubmit)} */
                    onPress={() => saveDataCovidDataBase(temperature,smell,taste,cough,soreThroat,breathe,diarrhea,headache,vomits,musclePain,dni,employeeId,role0,role1,role2,role3,role4,role5,role6,role7,role8,companyId)}>
                    <Text>Registrar Datos de Covid</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView> 
        </View>
    );
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
        justifyContent: 'space-around',
        marginHorizontal: 16,
        padding: 10,
        flexDirection: 'row',
    },
    bottonAndText: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
    },
    bottonRadio: {
        padding: 0,
        borderRadius: 80,
        alignItems: 'center',
        backgroundColor: '#87cefa',
        width: 55,
        height: 55,
        borderWidth: 1,
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
    title1: {
        color: 'rgba(0, 0, 121, 0.89)', 
        fontSize: 30, 
        textAlign: 'center'
    },
    title2: {
        color: 'rgba(0, 0, 121, 0.89)', 
        fontSize: 20, 
    },
    title3: {
        color: 'rgba(0, 0, 121, 0.89)', 
        fontSize: 20, 
        padding: 5,
    },
    text: {
        justifyContent: 'center',
        fontSize: 18,
        textAlign: 'center',
        marginTop: '3%',
        marginBottom: '3%',
    },
    temp1: {
        fontSize: 40,
    },
    temp2: {
        fontSize: 40,
    },
    botton: {
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#87cefa'
    },
});

export default CovidEmployeeData2;