import React from "react"
import { View, Image } from 'react-native'
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
                <Icon
                name="camera"
                size={50}
                color={'#FFFFFF'}
                onPress={() => foto(takePhoto, imgCache, cameraRef)}
                style={styles.iconCamara}
                />
            </View>
        </View> 
    )
}

export default UserImage



