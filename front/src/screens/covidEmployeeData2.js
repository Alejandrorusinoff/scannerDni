import React, { useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import CheckBoxText from '../components/ChecKBoxText/checKBoxText';
import { useSelector } from 'react-redux';
import styles from '../styles/covidEmployeeDataStyles2';

const CovidEmployeeData2 = ({temperature,smell,taste,cough,soreThroat,breathe,diarrhea,headache,vomits,musclePain, checkboxState0, checkboxState1, checkboxState2, checkboxState3, checkboxState4, checkboxState5, checkboxState6, checkboxState7, checkboxState8, companyId, dni, employeeId, role0, role1, role2, role3, role4, role5, role6, role7, role8, datos2, saveDataCovidDataBase, handleYesOp0, handleYesOp1, handleYesOp2, handleYesOp3, handleYesOp4, handleYesOp5, handleYesOp6, handleYesOp7, handleYesO8}) => {
    const {user} = useSelector(state => state);
   
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}> 
                <View>
                    <Text style={styles.title1}>Autoevaluación</Text>
                    <Text style={styles.text}>Si tu situación de salud contempla algunas de las siguientes opciones, seleccionrá las que correspondan</Text>
                        <Text style={styles.title2}>{datos2[0]}</Text>
                        <CheckBoxText
                            isChecked={checkboxState0}
                            onPress={handleYesOp0}
                            style={{padding: 5}}
                        /> 
                        <Text style={styles.title2}>{datos2[1]}</Text>
                        <CheckBoxText
                            isChecked={checkboxState1}
                            onPress={handleYesOp1}
                            style={{padding: 5}}
                        /> 
                        <Text style={styles.title2}>{datos2[2]}</Text>
                        <CheckBoxText
                            isChecked={checkboxState2}
                            onPress={handleYesOp2}
                            style={{padding: 5}}
                        /> 
                        <Text style={styles.title2}>{datos2[3]}</Text>
                        <CheckBoxText
                            isChecked={checkboxState3}
                            onPress={handleYesOp3}
                            style={{padding: 5}}
                        /> 
                        <Text style={styles.title2}>{datos2[4]}</Text>
                        <CheckBoxText
                            isChecked={checkboxState4}
                            onPress={handleYesOp4}
                            style={{padding: 5}}
                        /> 
                        <Text style={styles.title2}>{datos2[5]}</Text>
                        <CheckBoxText
                            isChecked={checkboxState5}
                            onPress={handleYesOp5}
                            style={{padding: 5}}
                        /> 
                        <Text style={styles.title2}>{datos2[6]}</Text>
                        <CheckBoxText
                            isChecked={checkboxState6}
                            onPress={handleYesOp6}
                            style={{padding: 5}}
                        /> 
                        <Text style={styles.title2}>{datos2[7]}</Text>
                        <CheckBoxText
                            isChecked={checkboxState7}
                            onPress={handleYesOp7}
                            style={{padding: 5}}
                        /> 
                        <Text style={styles.title2}>{datos2[8]}</Text>
                        <CheckBoxText
                            isChecked={checkboxState8}
                            onPress={handleYesO8}
                            style={{padding: 5}}
                        /> 
                    <TouchableOpacity style={styles.botton}
                    onPress={() => saveDataCovidDataBase(temperature,smell,taste,cough,soreThroat,breathe,diarrhea,headache,vomits,musclePain,dni,employeeId,role0,role1,role2,role3,role4,role5,role6,role7,role8,companyId,user)}>
                    <Text>Registrar Datos de Covid</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView> 
        </View>
    );
}

export default CovidEmployeeData2;