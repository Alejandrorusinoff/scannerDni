import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { postCovidData } from '../axiosRequests/request'
import { showAlert, closeAlert } from "react-native-customisable-alert";
import { datos2 } from '../data/datos';
import { checkBoxData2 } from '../generalFunctions/generalFunctions';
import CovidEmployeeData2 from '../screens/covidEmployeeData2';
import styles from '../styles/covidEmployeeDataStyles2';

const CovidEmployeeData2Container = ({navigation, route}) => {   
    const {temperature,smell,taste,cough,soreThroat,breathe,diarrhea,headache,vomits,musclePain,dni,employeeId} = route.params
    const datas = checkBoxData2(datos2)
    const empleado = useSelector(state => state)
    const companyId = useSelector(state => state.user.company._id);
    const {user} = useSelector(state => state);

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
            <CovidEmployeeData2 temperature={temperature} smell={smell} taste={taste} cough={cough} soreThroat={soreThroat} breathe={breathe} diarrhea={diarrhea} headache={headache} vomits={vomits} musclePain={musclePain} companyId={companyId} dni={dni} employeeId={employeeId} datas={datas} saveDataCovidDataBase={saveDataCovidDataBase} user={user}/>
        </View>
    );
}

export default CovidEmployeeData2Container;