import React from 'react'
import {Text, View, ScrollView, } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Table, Row, Rows,} from 'react-native-table-component';
import styles from '../styles/singleEmployeeStyles';

const SingleEmployee = ({name, lastName, dni, age, diretion, organizationName, _id, tableHead,  widthArr, dataCovid, dataCovidTable}) => {
   
    return(    
        <View>
            <ScrollView showsVerticalScrollIndicator={false}> 
            <Text style={styles.title1}>{name} {lastName}</Text>
                <View style={{flex: 3}}>
                    <View>
                        <Icon name="person" size={150} style={styles.img1}></Icon>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.title3}>N° Documento: {dni}</Text>
                        <Text style={styles.title3}>Edad: {age}</Text>
                        <Text style={styles.title3}>Domicilio: {diretion}</Text>
                        <Text style={styles.title3}>Empresa: {organizationName}</Text>
                    </View>
                </View>
                <View style={styles.bottonAndText}>
                    {/* <TouchableOpacity style={styles.botton}>
                        <Text>Vincular a la organización</Text>
                    </TouchableOpacity> */}
                </View>
                {dataCovid.length ? 
                    <ScrollView horizontal={true}>
                    <View style={styles.container1}>
                        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                        <Row data={tableHead} style={styles.head} textStyle={{textAlign: 'center'}} widthArr={widthArr}/>
                        <Rows data={dataCovidTable} textStyle={{textAlign: 'center'}} widthArr={widthArr}/>
                    </Table>
                    </View>
                    </ScrollView> : null    
                }
            </ScrollView>
        </View> 
    )
}

export default SingleEmployee



