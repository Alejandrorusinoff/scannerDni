import React, { useState } from 'react';
import { View } from 'react-native';
import { showAlert, closeAlert } from "react-native-customisable-alert";
import { handleOp, trunc, suma, resta } from '../generalFunctions/functions'
import { datos1 } from '../data/datos';
import CovidEmployeeData1 from '../screens/covidEmployeeData1';
import styles from '../styles/covidEmployeeData1Styles';

const CovidEmployeeData1Container = ({navigation, route}) => {
  const [temperature, setTemperature] = React.useState(36)
  const [boxUno1, setBoxUno1] = useState(false);
  const [boxDos1, setBoxDos1] = useState(false);
  const [role1, setRole1] = useState('');
  const [boxUno2, setBoxUno2] = useState(false);
  const [boxDos2, setBoxDos2] = useState(false);
  const [role2, setRole2] = useState('');
  const [boxUno3, setBoxUno3] = useState(false);
  const [boxDos3, setBoxDos3] = useState(false);
  const [role3, setRole3] = useState('');
  const [boxUno4, setBoxUno4] = useState(false);
  const [boxDos4, setBoxDos4] = useState(false);
  const [role4, setRole4] = useState('');
  const [boxUno5, setBoxUno5] = useState(false);
  const [boxDos5, setBoxDos5] = useState(false);
  const [role5, setRole5] = useState('');
  const [boxUno6, setBoxUno6] = useState(false);
  const [boxDos6, setBoxDos6] = useState(false);
  const [role6, setRole6] = useState('');
  const [boxUno7, setBoxUno7] = useState(false);
  const [boxDos7, setBoxDos7] = useState(false);
  const [role7, setRole7] = useState('');
  const [boxUno8, setBoxUno8] = useState(false);
  const [boxDos8, setBoxDos8] = useState(false);
  const [role8, setRole8] = useState('');
  const [boxUno9, setBoxUno9] = useState(false);
  const [boxDos9, setBoxDos9] = useState(false);
  const [role9, setRole9] = useState('');

  function saveDataCovidStore(temperature,smell,taste,cough,soreThroat,breathe,diarrhea,headache,vomits,musclePain) {
    if (temperature && smell && taste && cough && soreThroat && breathe && diarrhea && headache && vomits && musclePain) {
      navigation.navigate('CovidEmployeeData2Container',{temperature,smell,taste,cough,soreThroat,breathe,diarrhea,headache,vomits,musclePain})
    }
    else{
      showAlert({
        title:"Error",
        message: "Debe elegir una opción",
        alertType: 'error',
        onPress: () => {
          closeAlert()
        }
      })
    }
  }

  return (
    <View style={styles.container}>
      <CovidEmployeeData1 temperature={temperature} setTemperature={setTemperature} boxUno1={boxUno1} boxDos1={boxDos1} boxUno2={boxUno2} boxDos2={boxDos2} boxUno3={boxUno3} boxDos3={boxDos3} boxUno4={boxUno4} boxDos4={boxDos4} boxUno5={boxUno5} boxDos5={boxDos5} boxUno6={boxUno6} boxDos6={boxDos6} boxUno7={boxUno7} boxDos7={boxDos7} boxUno8={boxUno8} boxDos8={boxDos8} boxUno9={boxUno9} boxDos9={boxDos9} role1={role1} role2={role2} role3={role3} role4={role4} role5={role5}role6={role6} role7={role7} role8={role8} role9={role9} setBoxUno1={setBoxUno1} setBoxUno2={setBoxUno2} setBoxUno3={setBoxUno3} setBoxUno4={setBoxUno4} setBoxUno5={setBoxUno5} setBoxUno6={setBoxUno6} setBoxUno7={setBoxUno7} setBoxUno8={setBoxUno8} setBoxUno9={setBoxUno9} setBoxDos1={setBoxDos1} setBoxDos2={setBoxDos2} setBoxDos3={setBoxDos3} setBoxDos4={setBoxDos4} setBoxDos5={setBoxDos5} setBoxDos6={setBoxDos6} setBoxDos7={setBoxDos7} setBoxDos8={setBoxDos8} setBoxDos9={setBoxDos9} setRole1={setRole1} setRole2={setRole2} setRole3={setRole3} setRole4={setRole4} setRole5={setRole5} setRole6={setRole6} setRole7={setRole7} setRole8={setRole8} setRole9={setRole9}handleOp={handleOp} datos1={datos1} trunc={trunc} suma={suma} resta={resta} saveDataCovidStore={saveDataCovidStore} 
      />
    </View>
  );  
};

export default CovidEmployeeData1Container;