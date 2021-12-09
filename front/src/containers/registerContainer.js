import React, { useState } from 'react'
import { View } from 'react-native'
import { postRegister } from '../axiosRequests/request'
import Register from '../screens/register'
import { lowerValidation } from '../ generalFunctions/generalFunctions'
import styles from '../styles/registerStyles';

const RegisterContainer = () => {
    const [register, setRegister] = useState({})

    function sendRegister({companyHeadquartes,companyName,description,diretion,email,location,password,province}) {
        postRegister(
            lowerValidation(companyHeadquartes),
            lowerValidation(companyName),
            lowerValidation(description),
            lowerValidation(diretion),
            lowerValidation(email),
            lowerValidation(location),
            password,
            lowerValidation(province))
        .then(({data}) => setRegister(data))
        .catch(err => console.log(err))
    }

    return(    
        <View style={styles.container}>
            <Register sendRegister={sendRegister}/>
        </View>
    )
}

export default RegisterContainer