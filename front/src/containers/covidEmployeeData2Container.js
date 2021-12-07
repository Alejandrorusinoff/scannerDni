import React, {useState} from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { showAlert, closeAlert } from "react-native-customisable-alert";
import CovidEmployeeData2 from '../screens/covidEmployeeData2';
import styles from '../styles/covidEmployeeDataStyles2';

const CovidEmployeeData2Container = ({navigation, route}) => {
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
    
    const empleado = useSelector(state => state)
    console.log(empleado)
    const companyId = useSelector(state => state.user.company._id);
    const {user} = useSelector(state => state);
    const dni = useSelector(state => state.employee.employee.dni)
    const employeeId = useSelector(state => state.employee.employee._id)

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

    function saveDataCovidDataBase(temperature,smell,taste,cough,soreThroat,breathe,diarrhea,headache,vomits,musclePain,dni,employeeId,peopleCovid,lastDaysPeople,cancer,diabetes,liverDisease,chronicIllness,respiratoryDisease,heartDisease,lowDefenses, organizationId) {
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
                    navigation.navigate('HomeContainer')
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
            <CovidEmployeeData2 temperature={temperature} smell={smell} taste={taste} cough={cough} soreThroat={soreThroat} breathe={breathe} diarrhea={diarrhea} headache={headache} vomits={vomits} musclePain={musclePain} checkboxState0={checkboxState0} checkboxState1={checkboxState1} checkboxState2={checkboxState2} checkboxState3={checkboxState3} checkboxState4={checkboxState4} checkboxState5={checkboxState5} checkboxState6={checkboxState6} checkboxState7={checkboxState7} checkboxState8={checkboxState8} companyId={companyId} dni={dni} employeeId={employeeId} role0={role0} role1={role1} role2={role2} role3={role3} role4={role4} role5={role5} role6={role6} role7={role7} role8={role8} datos2={datos2} saveDataCovidDataBase={saveDataCovidDataBase} handleYesOp0={handleYesOp0} handleYesOp1={handleYesOp1} handleYesOp2={handleYesOp2} handleYesOp3={handleYesOp3} handleYesOp4={handleYesOp4}
            handleYesOp5={handleYesOp5} handleYesOp6={handleYesOp6} handleYesOp7={handleYesOp7} handleYesO8={handleYesO8}
            />
        </View>
    );
}

export default CovidEmployeeData2Container;