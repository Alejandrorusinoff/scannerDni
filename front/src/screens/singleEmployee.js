import React from 'react'
import {Text, View, ScrollView,} from 'react-native'
import { Table, Row, Rows,} from 'react-native-table-component';
import {firstNameUp} from '../generalFunctions/generalFunctions'
import UserImage from '../components/UserImage/userImage';
import styles from '../styles/singleEmployeeStyles';

const SingleEmployee = ({name, lastName, dni, age, diretion, organizationName, tableHead,  widthArr, dataCovid, dataCovidTable, photo, foto, takePhoto, imgCache, cameraRef}) => {

    return(    
        <View>
            <ScrollView showsVerticalScrollIndicator={false}> 
            <Text style={styles.title1}>{firstNameUp(name)} {firstNameUp(lastName)}</Text>
                <View>
                    <View>
                        <UserImage foto={foto} takePhoto={takePhoto} imgCache={imgCache} cameraRef={cameraRef} photo={photo}/>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.title3}>N° Documento: {dni}</Text>
                        <Text style={styles.title3}>Edad: {age}</Text>
                        <Text style={styles.title3}>Domicilio: {firstNameUp(diretion)}</Text>
                        <Text style={styles.title3}>Empresa: {firstNameUp(organizationName)}</Text>
                    </View>
                </View>
                <View style={styles.bottonAndText}>
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



