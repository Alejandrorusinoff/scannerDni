import React from "react"
import { View, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../../styles/userImageStyles';

const UserImage = ({foto, takePhoto, imgCache, cameraRef, photo,}) => {

    return(
        <View style={styles.containerUserImg}>
            <View style={styles.userImg}>
                {imgCache || photo ?
                    <Image
                        style={styles.photoEmployee}
                        source={{
                        uri: imgCache || photo,
                        }}
                    /> : 
                    <Icon name="person" size={165} style={styles.img1}></Icon>
                }  
            </View>
            <View style={styles.ContainerIconCamara}>
                <TouchableOpacity style={styles.iconCamara} onPress={() => foto(takePhoto, imgCache, cameraRef)}>
                    <Icon 
                        name="camera"
                        size={50}
                        color='#434343'  
                    />
                </TouchableOpacity>
            </View>
        </View> 
    )
}

export default UserImage



