import React from "react"
import { View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../../styles/userImageStyles';

const UserImage = ({foto, takePhoto, imgCache, cameraRef}) => {

    return(
        <View style={styles.containerUserImg}>
            <View style={styles.userImg}>
                {/* <Image
                    style={styles.photoEmployee}
                    source={{
                    uri: 'file:///data/user/0/com.awesomeproject/cache/Camera/14c84ec0-013b-4c1e-ad09-250d03bb7c96.jpg',
                    }}
                /> */}
                <Icon name="person" size={150} style={styles.img1}></Icon>
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



