import React, { useState } from 'react';
import { View } from 'react-native';
import { showAlert, closeAlert } from "react-native-customisable-alert";
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

  const datos1 = [
    '¿Percibiste una marcada pérdida del olfato de manera repentina?',
    '¿Percibiste una marcada pérdida del gusto (sabor de los alimentos) de manera repentina?',
    '¿Tenés tos?',
    '¿Tenés dolor de garganta?',
    '¿Tenés dificultad respiratoria o falta de aire?',
    '¿Tenés dolor de cabeza?',
    '¿Tenés diarrea?',
    '¿Tenés vómitos?',
    '¿Tenés dolor muscular?',
  ]

  // ¡Percibiste una marcada pérdida del olfato de manera repentina?'
  const handleYesOp1 = () => {
    if (!boxUno1) {
      setBoxUno1(true);
      setBoxDos1(false);
      setRole1('si');
    }
  };

  const handleNotOp1 = () => {
    if (!boxDos1) {
      setBoxDos1(true);
      setBoxUno1(false);
      setRole1('no');
    }
  };

  // ¿Percibiste una marcada pérdida del gusto (sabor de los alimentos) de manera repentina?
  const handleYesOp2 = () => {
    if (!boxUno2) {
      setBoxUno2(true);
      setBoxDos2(false);
      setRole2('si');
    }
  };

  const handleNotOp2 = () => {
    if (!boxDos2) {
      setBoxDos2(true);
      setBoxUno2(false);
      setRole2('no');
    }
  };

  // ¿Tenés tos?
  const handleYesOp3 = () => {
    if (!boxUno3) {
      setBoxUno3(true);
      setBoxDos3(false);
      setRole3('si');
    }
  };

  const handleNotOp3 = () => {
    if (!boxDos3) {
      setBoxDos3(true);
      setBoxUno3(false);
      setRole3('no');
    }
  };

  // ¿Tenés dolor de garganta?
  const handleYesOp4 = () => {
    if (!boxUno4) {
      setBoxUno4(true);
      setBoxDos4(false);
      setRole4('si');
    }
  };

  const handleNotOp4 = () => {
    if (!boxDos4) {
      setBoxDos4(true);
      setBoxUno4(false);
      setRole4('no');
    }
  };

  // ¿Tenés dificultad respiratoria o falta de aire?
  const handleYesOp5 = () => {
    if (!boxUno5) {
      setBoxUno5(true);
      setBoxDos5(false);
      setRole5('si');
    }
  };

  const handleNotOp5 = () => {
    if (!boxDos5) {
      setBoxDos5(true);
      setBoxUno5(false);
      setRole5('no');
    }
  };

  // ¿Tenés dolor de cabeza?
  const handleYesOp6 = () => {
    if (!boxUno6) {
      setBoxUno6(true);
      setBoxDos6(false);
      setRole6('si');
    }
  };

  const handleNotOp6 = () => {
    if (!boxDos6) {
      setBoxDos6(true);
      setBoxUno6(false);
      setRole6('no');
    }
  };

  // ¿Tenés diarrea?
  const handleYesOp7 = () => {
    if (!boxUno7) {
      setBoxUno7(true);
      setBoxDos7(false);
      setRole7('si');
    }
  };

  const handleNotOp7 = () => {
    if (!boxDos7) {
      setBoxDos7(true);
      setBoxUno7(false);
      setRole7('no');
    }
  };

  // ¿Tenés vómitos?
  const handleYesOp8 = () => {
    if (!boxUno8) {
      setBoxUno8(true);
      setBoxDos8(false);
      setRole8('si');
    }
  };

  const handleNotOp8 = () => {
    if (!boxDos8) {
      setBoxDos8(true);
      setBoxUno8(false);
      setRole8('no');
    }
  };

  // ¿Tenés dolor muscular?
  const handleYesOp9 = () => {
    if (!boxUno9) {
      setBoxUno9(true);
      setBoxDos9(false);
      setRole9('si');
    }
  };

  const handleNotOp9 = () => {
    if (!boxDos9) {
      setBoxDos9(true);
      setBoxUno9(false);
      setRole9('no');
    }
  };

  //trunquea numeros a un decimal
  function trunc (x, posiciones = 0) {
    var s = x.toString()
    var l = s.length
    var decimalLength = s.indexOf('.') + 1
    if (l - decimalLength <= posiciones){
      return x
    }
    var isNeg  = x < 0
    var decimal =  x % 1
    var entera  = isNeg ? Math.ceil(x) : Math.floor(x)
    var decimalFormated = Math.floor(
      Math.abs(decimal) * Math.pow(10, posiciones)
    )
    var finalNum = entera + 
      ((decimalFormated / Math.pow(10, posiciones))*(isNeg ? -1 : 1))
    return finalNum
  }

  function suma() {
    if (temperature < 42) {
      const temp1 = temperature + 0.1  
      setTemperature(trunc(temp1, 1))
    }
  }

  function resta() {
    if (temperature > 34) {
      const temp1 = (temperature - 0.1)
      setTemperature(trunc(temp1, 1))
    }
  }

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
      <CovidEmployeeData1 temperature={temperature} boxUno1={boxUno1} boxDos1={boxDos1} boxUno2={boxUno2} boxDos2={boxDos2} boxUno3={boxUno3} boxDos3={boxDos3} boxUno4={boxUno4} boxDos4={boxDos4} boxUno5={boxUno5} boxDos5={boxDos5} boxUno6={boxUno6} boxDos6={boxDos6} boxUno7={boxUno7} boxDos7={boxDos7} boxUno8={boxUno8} boxDos8={boxDos8} boxUno9={boxUno9} boxDos9={boxDos9} datos1={datos1} handleYesOp1={handleYesOp1} handleNotOp1={handleNotOp1} handleYesOp2={handleYesOp2} handleNotOp2={handleNotOp2} handleYesOp3={handleYesOp3} handleNotOp3={handleNotOp3} handleYesOp4={handleYesOp4} handleNotOp4={handleNotOp4} handleYesOp5={handleYesOp5} handleNotOp5={handleNotOp5} handleYesOp6={handleYesOp6}
      handleNotOp6={handleNotOp6} handleYesOp7={handleYesOp7} handleNotOp7={handleNotOp7}
      handleYesOp8={handleYesOp8} handleNotOp8={handleNotOp8} handleYesOp9={handleYesOp9}
      handleNotOp9={handleNotOp9} trunc={trunc} suma={suma} resta={resta} saveDataCovidStore={saveDataCovidStore} role1={role1} role2={role2} role3={role3} role4={role4} role5={role5}role6={role6} role7={role7} role8={role8} role9={role9}
      />
    </View>
  );  
};

export default CovidEmployeeData1Container;