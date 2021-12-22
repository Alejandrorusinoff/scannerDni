import React, {useState} from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import {postCovidData} from '../axiosRequests/request'
import { showAlert, closeAlert } from "react-native-customisable-alert";
import { handleYesOp } from '../generalFunctions/generalFunctions'
import { datos2 } from '../data/datos';
import CovidEmployeeData2 from '../screens/covidEmployeeData2';
import styles from '../styles/covidEmployeeDataStyles2';

const CovidEmployeeData2Container = ({navigation, route}) => {
    const [checkboxState0, setCheckboxState0] = useState(false);
    const [role0, setRole0] = useState('no');
    const [checkboxState1, setCheckboxState1] = useState(false);
    const [role1, setRole1] = useState('no');
    const [checkboxState2, setCheckboxState2] = useState(false);
    const [role2, setRole2] = useState('no');
    const [checkboxState3, setCheckboxState3] = useState(false);
    const [role3, setRole3] = useState('no');
    const [checkboxState4, setCheckboxState4] = useState(false);
    const [role4, setRole4] = useState('no');
    const [checkboxState5, setCheckboxState5] = useState(false);
    const [role5, setRole5] = useState('no');
    const [checkboxState6, setCheckboxState6] = useState(false);
    const [role6, setRole6] = useState('no');
    const [checkboxState7, setCheckboxState7] = useState(false);
    const [role7, setRole7] = useState('no');
    const [checkboxState8, setCheckboxState8] = useState(false);
    const [role8, setRole8] = useState('no');
    
    const {temperature,smell,taste,cough,soreThroat,breathe,diarrhea,headache,vomits,musclePain,} = route.params
    
    const empleado = useSelector(state => state)
    const companyId = useSelector(state => state.user.company._id);
    const {user} = useSelector(state => state);
    const dni = useSelector(state => state.employee.employee.dni)
    const employeeId = useSelector(state => state.employee.employee._id)

    function saveDataCovidDataBase(temperature,smell,taste,cough,soreThroat,breathe,diarrhea,headache,vomits,musclePain,dni,employeeId,peopleCovid,lastDaysPeople,cancer,diabetes,liverDisease,chronicIllness,respiratoryDisease,heartDisease,lowDefenses, organizationId, user) {
        postCovidData(temperature,smell,taste,cough,soreThroat,breathe,diarrhea,headache,vomits,musclePain,dni,employeeId,peopleCovid,lastDaysPeople,cancer,diabetes,liverDisease,chronicIllness,respiratoryDisease,heartDisease,lowDefenses, organizationId, user)
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

    return (
        <View style={styles.container}>
            <CovidEmployeeData2 temperature={temperature} smell={smell} taste={taste} cough={cough} soreThroat={soreThroat} breathe={breathe} diarrhea={diarrhea} headache={headache} vomits={vomits} musclePain={musclePain} checkboxState0={checkboxState0} checkboxState1={checkboxState1} checkboxState2={checkboxState2} checkboxState3={checkboxState3} checkboxState4={checkboxState4} checkboxState5={checkboxState5} checkboxState6={checkboxState6} checkboxState7={checkboxState7} checkboxState8={checkboxState8} companyId={companyId} dni={dni} employeeId={employeeId} role0={role0} role1={role1} role2={role2} role3={role3} role4={role4} role5={role5} role6={role6} role7={role7} role8={role8} datos2={datos2} saveDataCovidDataBase={saveDataCovidDataBase} handleYesOp={handleYesOp} setCheckboxState0={setCheckboxState0} setRole0={setRole0} setCheckboxState1={setCheckboxState1} setRole1={setRole1} setCheckboxState2={setCheckboxState2} setRole2={setRole2} setCheckboxState3={setCheckboxState3} setRole3={setRole3} setCheckboxState4={setCheckboxState4} setRole4={setRole4} setCheckboxState5={setCheckboxState5} setRole5={setRole5} setCheckboxState6={setCheckboxState6} setRole6={setRole6} setCheckboxState7={setCheckboxState7} setRole7={setRole7} setCheckboxState8={setCheckboxState8} setRole8={setRole8}
            />
        </View>
    );
}

export default CovidEmployeeData2Container;