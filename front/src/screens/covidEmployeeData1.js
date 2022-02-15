import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import CheckBoxText from '../components/ChecKBoxText/checKBoxText';
import styles from '../styles/covidEmployeeData1Styles';

const CovidEmployeeData1 = ({temperature, suma, resta, datas, saveDataCovidStore, dni, employeeId}) => {

  return (
    <View>
        <StatusBar backgroundColor="black"/>
        <ScrollView showsVerticalScrollIndicator={false}> 
        <View>
          <Text style={styles.title1}>Autoevaluación</Text>
          <Text style={styles.text}>Si tu situación de salud contempla algunas de las siguientes opciones, seleccionrá las que correspondan</Text>
          <Text style={styles.title2}>¿Cuál es tu temperatura corporal actual?</Text>

          <View style={styles.container}>
            <TouchableOpacity style={styles.bottonRadio} onPress={resta}>
              <Text style={styles.temp1}>-</Text>
            </TouchableOpacity>
              <Text style={styles.temp}>{temperature}</Text>
            <TouchableOpacity style={styles.bottonRadio} onPress={suma}>
              <Text style={styles.temp2}>+</Text>
            </TouchableOpacity>
          </View>    

          {datas && datas.map((data, index) => (
            <View key={index}>
              <Text style={styles.title2}>{data.question}</Text>
              <CheckBoxText
                text="Si"
                isChecked={data.hook.boxUno}
                onPress={data.hook.handleOpA}
                style={{padding: 5}}
              />     
              <CheckBoxText
                text="No"
                isChecked={data.hook.boxDos}
                onPress={data.hook.handleOpB}
                style={{padding: 5}}
              />
            </View>
          ))}
          <TouchableOpacity style={styles.botton}
          onPress={() => saveDataCovidStore(temperature,datas[0].hook.role,datas[1].hook.role,datas[2].hook.role,datas[3].hook.role,datas[4].hook.role,datas[5].hook.role,datas[6].hook.role,datas[7].hook.role,datas[8].hook.role,dni,employeeId)}>
            <Text>Registrar Datos de Covid</Text>
          </TouchableOpacity>
        </View>
      </ScrollView> 
    </View>
  );  
};

export default CovidEmployeeData1;