import React, { useState } from 'react'
import { View } from 'react-native'
import axios from 'axios'
import { postRegister } from '../axiosRequests/request'
import Register from '../screens/register'
import styles from '../styles/registerStyles';

const RegisterContainer = () => {
    const [register, setRegister] = useState({})

    function sendRegister({companyHeadquartes,companyName,description,diretion,email,location,password,province}) {
        /* axios.post('http://localhost:3001/api/organization/register', {
            companyHeadquartes,
            companyName,
            description,
            diretion,
            email,
            location,
            password,
            province
        }) */
        postRegister(companyHeadquartes,companyName,description,diretion,email,location,password,province)
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