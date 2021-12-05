import React, {useState} from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { showAlert, closeAlert } from "react-native-customisable-alert";
import CovidEmployeeData2 from '../screens/covidEmployeeData2';

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
        <View>
            <CovidEmployeeData2/>
        </View>
    );
}

export default CovidEmployeeData2Container;