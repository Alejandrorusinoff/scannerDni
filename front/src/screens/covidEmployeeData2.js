import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import CheckBoxText from '../components/ChecKBoxText/checKBoxText';
import styles from '../styles/covidEmployeeDataStyles2';

const CovidEmployeeData2 = ({temperature,smell,taste,cough,soreThroat,breathe,diarrhea,headache,vomits,musclePain, companyId, dni, employeeId, datas, saveDataCovidDataBase, user}) => {

    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}> 
                <StatusBar backgroundColor="black"/>
                <View>
                    <Text style={styles.title1}>Autoevaluación</Text>
                    <Text style={styles.text}>Si tu situación de salud contempla algunas de las siguientes opciones, seleccionrá las que correspondan</Text>

                    {datas && datas.map((data, index) => {
                        return(
                            <View key={index}>
                                <Text style={styles.title2}>{data.question}</Text>
                                <CheckBoxText
                                    isChecked={data.hook.checkboxState}
                                    onPress={data.hook.check}
                                    style={{padding: 5}}
                                /> 
                            </View>
                        )}
                    )}
                    <TouchableOpacity style={styles.botton}
                    onPress={() => saveDataCovidDataBase(temperature,smell,taste,cough,soreThroat,breathe,diarrhea,headache,vomits,musclePain,dni,employeeId,datas[0].hook.role,datas[1].hook.role,datas[2].hook.role,datas[3].hook.role,datas[4].hook.role,datas[5].hook.role,datas[6].hook.role,datas[7].hook.role,datas[8].hook.role,companyId,user)}>
                    <Text>Registrar Datos de Covid</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView> 
        </View>
    );
}

export default CovidEmployeeData2;