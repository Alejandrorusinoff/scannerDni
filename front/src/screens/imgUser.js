import React from "react";
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "../styles/imgUserStyles";

const ImgUser = () => {
    return(
        <View style={styles.img}>
            <Icon name="person" size={300} style={{color: '#f5f5f5'}}></Icon>
        </View>
    )
}

export default ImgUser