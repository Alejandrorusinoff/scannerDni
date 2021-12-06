import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import CheckBoxText from '../components/ChecKBoxText/checKBoxText';
import styles from '../styles/covidEmployeeData1Styles';

const CovidEmployeeData1 = ({temperature, boxUno1, boxDos1, boxUno2, boxDos2, boxUno3, boxDos3, boxUno4, boxDos4, boxUno5, boxDos5, boxUno6, boxDos6, boxUno7, boxDos7, boxUno8, boxDos8, boxUno9, boxDos9, datos1, handleYesOp1, handleNotOp1, handleYesOp2, handleNotOp2, handleYesOp3, handleNotOp3, handleYesOp4, handleNotOp4, handleYesOp5, handleNotOp5, handleYesOp6,
handleNotOp6, handleYesOp7, handleNotOp7, handleYesOp8, handleNotOp8, handleYesOp9, handleNotOp9, suma, resta, saveDataCovidStore, role1, role2, role3, role4, role5, role6, role7, role8, role9}) => {
 
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}> 
        <View>
          <Text style={styles.title1}>Autoevaluación</Text>
          <Text style={styles.text}>Si tu situación de salud contempla algunas de las siguientes opciones, seleccionrá las que correspondan</Text>
          <Text style={styles.title2}>¿Cuál es tu temperatura corporal actual?</Text>

          <View style={styles.container}>
            <TouchableOpacity style={styles.bottonRadio} onPress={() => resta()}>
              <Text style={styles.temp1}>-</Text>
            </TouchableOpacity>
            <Text style={styles.temp1}>{temperature}</Text>
            <TouchableOpacity style={styles.bottonRadio} onPress={() => suma()}>
              <Text style={styles.temp2}>+</Text>
            </TouchableOpacity>
          </View>         
            <Text style={styles.title2}>{datos1[0]}</Text>
            <CheckBoxText
              text="Si"
              isChecked={boxUno1}
              onPress={handleYesOp1}
              style={{padding: 5}}
            />     
            <CheckBoxText
              text="No"
              isChecked={boxDos1}
              onPress={handleNotOp1}
              style={{padding: 5}}
            />
            <Text style={styles.title2}>{datos1[1]}</Text>
            <CheckBoxText
              text="Si"
              isChecked={boxUno2}
              onPress={handleYesOp2}
              style={{padding: 5}}
            />    
            <CheckBoxText
              text="No"
              isChecked={boxDos2}
              onPress={handleNotOp2}
              style={{padding: 5}}
            />
            <Text style={styles.title2}>{datos1[2]}</Text>
            <CheckBoxText
              text="Si"
              isChecked={boxUno3}
              onPress={handleYesOp3}
              style={{padding: 5}}
            />     
            <CheckBoxText
              text="No"
              isChecked={boxDos3}
              onPress={handleNotOp3}
              style={{padding: 5}}
            />
            <Text style={styles.title2}>{datos1[3]}</Text>
            <CheckBoxText
              text="Si"
              isChecked={boxUno4}
              onPress={handleYesOp4}
              style={{padding: 5}}
            />     
            <CheckBoxText
              text="No"
              isChecked={boxDos4}
              onPress={handleNotOp4}
              style={{padding: 5}}
            />
            <Text style={styles.title2}>{datos1[4]}</Text>
            <CheckBoxText
              text="Si"
              isChecked={boxUno5}
              onPress={handleYesOp5}
              style={{padding: 5}}
            />     
            <CheckBoxText
              text="No"
              isChecked={boxDos5}
              onPress={handleNotOp5}
              style={{padding: 5}}
            />
            <Text style={styles.title2}>{datos1[5]}</Text>
            <CheckBoxText
              text="Si"
              isChecked={boxUno6}
              onPress={handleYesOp6}
              style={{padding: 5}}
            />     
            <CheckBoxText
              text="No"
              isChecked={boxDos6}
              onPress={handleNotOp6}
              style={{padding: 5}}
            />
            <Text style={styles.title2}>{datos1[6]}</Text>
            <CheckBoxText
              text="Si"
              isChecked={boxUno7}
              onPress={handleYesOp7}
              style={{padding: 5}}
            />    
            <CheckBoxText
              text="No"
              isChecked={boxDos7}
              onPress={handleNotOp7}
              style={{padding: 5}}
            />
            <Text style={styles.title2}>{datos1[7]}</Text>
            <CheckBoxText
              text="Si"
              isChecked={boxUno8}
              onPress={handleYesOp8}
              style={{padding: 5}}
            />  
            <CheckBoxText
              text="No"
              isChecked={boxDos8}
              onPress={handleNotOp8}
              style={{padding: 5}}
            />
            <Text style={styles.title2}>{datos1[8]}</Text>
            <CheckBoxText
              text="Si"
              isChecked={boxUno9}
              onPress={handleYesOp9}
              style={{padding: 5}}
            />
            <CheckBoxText
              text="No"
              isChecked={boxDos9}
              onPress={handleNotOp9}
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