import React, {useState, useEffect} from 'react'
import {Text, View, ScrollView, TouchableOpacity, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Table, Row, Rows,} from 'react-native-table-component';
import { RNCamera } from 'react-native-camera';
import styles from '../styles/singleEmployeeStyles';

const SingleEmployee = ({name, lastName, dni, age, diretion, organizationName, _id, tableHead,  widthArr, dataCovid, dataCovidTable}) => {
    /* const [{ cameraRef }, { takePicture }] = useCamera(null); */
    /* const [typeCamera, setTypeCamera] = useState(false);
    const [imgCache, setImgCache] = useState('');
    const [statePositionCamara, setStatePositionCamara] = useState(false)

    console.log(RNCamera.Constants.FlashMode.off)

    useEffect(() => {}, [imgCache]);

    const positionCamara = () => {
        if(!statePositionCamara){
            setStatePositionCamara(true)
        }
        else if(statePositionCamara){
            setStatePositionCamara(false)
        }
    }

    const setProfile = () => {
        route.params.onPicture(imgCache);
        setImgCache('');
        navigation.navigate('UserDetails');
      };

    const takePhoto = async () => {
        try {
          const data = await takePicture();
          console.log(data)
          setImgCache(data.uri);
        } catch (err) {
          console.log(err);
        }
    };
 */
    /* takePicture = async () => {
        if (this.camera) {
          const options = { quality: 0.5, base64: true };
          const data = await this.camera.takePictureAsync(options);
          console.log(data.uri);
        }
    }; */
   
    return(    
        <View>
            <ScrollView showsVerticalScrollIndicator={false}> 
            <Text style={styles.title1}>{name} {lastName}</Text>
                <View style={{flex: 3}}>
                    <View>
                        <Icon name="person" size={150} style={styles.img1}></Icon>
                        {/* <RNCamera
                            ref={cameraRef}
                            captureAudio={false}
                            flashMode={RNCamera.Constants.FlashMode.on}
                            style={styles1.preview}
                            type={typeCamera ? RNCamera.Constants.Type.back: RNCamera.Constants.Type.front}>
                            <View style={{ flexDirection:'row', paddingLeft: 130 }}>
                            <TouchableOpacity style={styles1.capture}>
                                <Icon
                                name="camera-outline"
                                size={50}
                                color={'#FFFFFF'}
                                onPress={() => takePhoto()}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles1.capture}>
                                <Icon
                                name={statePositionCamara ? "camera-outline" : "camera-reverse-outline" }
                                size={50}
                                color={'#FFFFFF'}
                                onPress={() => {setTypeCamera(!typeCamera), positionCamara()}}
                                />
                            </TouchableOpacity>
                            </View>
                        </RNCamera>   */}
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

/* const styles1 = StyleSheet.create({
    container: { flex: 1 },
    capture: {
      flex: 0,
      backgroundColor: 'transparent',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
    preview: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
}); */

export default SingleEmployee



