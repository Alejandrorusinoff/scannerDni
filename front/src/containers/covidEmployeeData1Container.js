import React from 'react';
import { View } from 'react-native';
import { requireOptionMessage } from '../alertMessage/message'
import { datos1 } from '../data/datos';
import { useTemperature } from '../hooks/customHook';
import { checkBoxData1 } from '../generalFunctions/generalFunctions';
import CovidEmployeeData1 from '../screens/covidEmployeeData1';
import styles from '../styles/covidEmployeeData1Styles';

const CovidEmployeeData1Container = ({navigation, route}) => {
  const {temperature, suma, resta} = useTemperature()
  const datas = checkBoxData1(datos1)
  const {dni, employeeId} = route.params

  function saveDataCovidStore(temperature,smell,taste,cough,soreThroat,breathe,diarrhea,headache,vomits,musclePain,dni,employeeId) {
    if (temperature && smell && taste && cough && soreThroat && breathe && diarrhea && headache && vomits && musclePain) {
      navigation.navigate('CovidEmployeeData2Container',{temperature,smell,taste,cough,soreThroat,breathe,diarrhea,headache,vomits,musclePain,dni,employeeId})
    }
    else{
      requireOptionMessage()
    }
  }

  return (
    <View style={styles.container}>
      <CovidEmployeeData1 temperature={temperature} suma={suma} resta={resta} datas={datas} saveDataCovidStore={saveDataCovidStore} dni={dni} employeeId={employeeId}/>
    </View>
  );  
};

export default CovidEmployeeData1Container;