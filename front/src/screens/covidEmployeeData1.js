import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import CheckBoxText from '../components/ChecKBoxText/checKBoxText';
import styles from '../styles/covidEmployeeData1Styles';

const CovidEmployeeData1 = ({temperature, setTemperature, boxUno1, boxDos1, boxUno2, boxDos2, boxUno3, boxDos3, boxUno4, boxDos4, boxUno5, boxDos5, boxUno6, boxDos6, boxUno7, boxDos7, boxUno8, boxDos8, boxUno9, boxDos9, role1, role2, role3, role4, role5, role6, role7, role8, role9, setBoxUno1, setBoxUno2, setBoxUno3, setBoxUno4, setBoxUno5, setBoxUno6, setBoxUno7, setBoxUno8, setBoxUno9, setBoxDos1, setBoxDos2, setBoxDos3, setBoxDos4, setBoxDos5, setBoxDos6, setBoxDos7, setBoxDos8, setBoxDos9, setRole1, setRole2, setRole3, setRole4, setRole5, setRole6, setRole7, setRole8, setRole9,datos1, suma, resta, saveDataCovidStore, handleOp, trunc}) => {
  
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}> 
        <View>
          <Text style={styles.title1}>Autoevaluación</Text>
          <Text style={styles.text}>Si tu situación de salud contempla algunas de las siguientes opciones, seleccionrá las que correspondan</Text>
          <Text style={styles.title2}>¿Cuál es tu temperatura corporal actual?</Text>

          <View style={styles.container}>
            <TouchableOpacity style={styles.bottonRadio} onPress={() => resta(temperature, setTemperature, trunc)}>
              <Text style={styles.temp1}>-</Text>
            </TouchableOpacity>
            <Text style={styles.temp1}>{temperature}</Text>
            <TouchableOpacity style={styles.bottonRadio} onPress={() => suma(temperature, setTemperature, trunc)}>
              <Text style={styles.temp2}>+</Text>
            </TouchableOpacity>
          </View>         
            <Text style={styles.title2}>{datos1[0]}</Text>
            <CheckBoxText
              text="Si"
              isChecked={boxUno1}
              onPress={() => handleOp(boxUno1, setBoxUno1, setBoxDos1, setRole1, true, false, 'si')}
              style={{padding: 5}}
            />     
            <CheckBoxText
              text="No"
              isChecked={boxDos1}
              onPress={() => handleOp(boxDos1, setBoxDos1, setBoxUno1, setRole1, true, false, 'no')}
              style={{padding: 5}}
            />

            <Text style={styles.title2}>{datos1[1]}</Text>
            <CheckBoxText
              text="Si"
              isChecked={boxUno2}
             /* 1 */ onPress={() => handleOp(boxUno2, setBoxUno2, setBoxDos2, setRole2, true, false, 'si')}
              style={{padding: 5}}
            />    
            <CheckBoxText
              text="No"
              isChecked={boxDos2}
             /* 2 */ onPress={() => handleOp(boxDos2, setBoxDos2, setBoxUno2, setRole2, true, false, 'no')}
              style={{padding: 5}}
            />

            <Text style={styles.title2}>{datos1[2]}</Text>
            <CheckBoxText
              text="Si"
              isChecked={boxUno3}
              onPress={() => handleOp(boxUno3, setBoxUno3, setBoxDos3, setRole3, true, false, 'si')}
              style={{padding: 5}}
            />     
            <CheckBoxText
              text="No"
              isChecked={boxDos3}
              onPress={() => handleOp(boxDos3, setBoxDos3, setBoxUno3, setRole3, true, false, 'no')}
              style={{padding: 5}}
            />

            <Text style={styles.title2}>{datos1[3]}</Text>
            <CheckBoxText
              text="Si"
              isChecked={boxUno4}
              onPress={() => handleOp(boxUno4, setBoxUno4, setBoxDos4, setRole4, true, false, 'si')}
              style={{padding: 5}}
            />     
            <CheckBoxText
              text="No"
              isChecked={boxDos4}
              onPress={() => handleOp(boxDos4, setBoxDos4, setBoxUno4, setRole4, true, false, 'no')}
              style={{padding: 5}}
            />

            <Text style={styles.title2}>{datos1[4]}</Text>
            <CheckBoxText
              text="Si"
              isChecked={boxUno5}
              onPress={() => handleOp(boxUno5, setBoxUno5, setBoxDos5, setRole5, true, false, 'si') }
              style={{padding: 5}}
            />     
            <CheckBoxText
              text="No"
              isChecked={boxDos5}
              onPress={() => handleOp(boxDos5, setBoxDos5, setBoxUno5, setRole5, true, false, 'no') }
              style={{padding: 5}}
            />

            <Text style={styles.title2}>{datos1[5]}</Text>
            <CheckBoxText
              text="Si"
              isChecked={boxUno6}
              onPress={() => handleOp(boxUno6, setBoxUno6, setBoxDos6, setRole6, true, false, 'si')}
              style={{padding: 5}}
            />     
            <CheckBoxText
              text="No"
              isChecked={boxDos6}
              onPress={() => handleOp(boxDos6, setBoxDos6, setBoxUno6, setRole6, true, false, 'no')}
              style={{padding: 5}}
            />

            <Text style={styles.title2}>{datos1[6]}</Text>
            <CheckBoxText
              text="Si"
              isChecked={boxUno7}
              onPress={() => handleOp(boxUno7, setBoxUno7, setBoxDos7, setRole7, true, false, 'si')}
              style={{padding: 5}}
            />    
            <CheckBoxText
              text="No"
              isChecked={boxDos7}
              onPress={() => handleOp(boxDos7, setBoxDos7, setBoxUno7, setRole7, true, false, 'no')}
              style={{padding: 5}}
            />

            <Text style={styles.title2}>{datos1[7]}</Text>
            <CheckBoxText
              text="Si"
              isChecked={boxUno8}
              onPress={() => handleOp(boxUno8, setBoxUno8, setBoxDos8, setRole8, true, false, 'si')}
              style={{padding: 5}}
            />  
            <CheckBoxText
              text="No"
              isChecked={boxDos8}
              onPress={() => handleOp(boxDos8, setBoxDos8, setBoxUno8, setRole8, true, false, 'no')}
              style={{padding: 5}}
            />

            <Text style={styles.title2}>{datos1[8]}</Text>
            <CheckBoxText
              text="Si"
              isChecked={boxUno9}
              onPress={() => handleOp(boxUno9, setBoxUno9, setBoxDos9, setRole9, true, false, 'si')}
              style={{padding: 5}}
            />
            <CheckBoxText
              text="No"
              isChecked={boxDos9}
              onPress={() => handleOp(boxDos9, setBoxDos9, setBoxUno9, setRole9, true, false, 'no')}
              style={{padding: 5}}
            />
          <TouchableOpacity style={styles.botton}
          onPress={() => saveDataCovidStore(temperature,role1,role2,role3,role4,role5,role6,role7,role8,role9)}>
            <Text>Registrar Datos de Covid</Text>
          </TouchableOpacity>
        </View>
      </ScrollView> 
    </View>
  );  
};

export default CovidEmployeeData1;