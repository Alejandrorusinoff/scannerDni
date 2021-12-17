import React, {useState} from 'react'
import {Text, View, ScrollView, Image} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Table, Row, Rows,} from 'react-native-table-component';
import { useNavigation } from '@react-navigation/native';
import UserImage from '../components/UserImage/userImage';
import { useCamera } from 'react-native-camera-hooks';
import styles from '../styles/singleEmployeeStyles';

const SingleEmployee = ({name, lastName, dni, age, diretion, organizationName, _id, tableHead,  widthArr, dataCovid, dataCovidTable,}) => {
    const navigation = useNavigation()
    const [imgCache, setImgCache] = useState('');
    const [{ cameraRef }, { takePicture }] = useCamera(null);
    
    const takePhoto = async () => {
        try {
          const data = await takePicture();
          console.log(data)
          setImgCache(data.uri);
        } catch (err) {
          console.log(err);
        }
    }

    const foto = (fn, uriImg, ref) => {
        navigation.navigate('CamaraContainer', {data: {fn, uriImg, ref}})
    }

    return(    
        <View>
            <ScrollView showsVerticalScrollIndicator={false}> 
            <Text style={styles.title1}>{name} {lastName}</Text>
                <View style={{flex: 3}}>
                    <View>
                        <UserImage foto={foto} takePhoto={takePhoto} imgCache={imgCache} cameraRef={cameraRef}/>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.title3}>N° Documento: {dni}</Text>
                        <Text style={styles.title3}>Edad: {age}</Text>
                        <Text style={styles.title3}>Domicilio: {diretion}</Text>
                        <Text style={styles.title3}>Empresa: {organizationName}</Text>
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



