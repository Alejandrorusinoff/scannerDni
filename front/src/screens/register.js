import React, { useState } from 'react'
import {Text, TextInput, StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native'
import { useForm, Controller } from "react-hook-form";
import axios from 'axios'

const Register = () => {
    const [register, setRegister] = useState({})
    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    function sendRegister({companyHeadquartes,companyName,description,diretion,email,location,password,province}) {
        axios.post('http://localhost:3001/api/organization/register', {
            companyHeadquartes,
            companyName,
            description,
            diretion,
            email,
            location,
            password,
            province
        }).then(({data}) => setRegister(data))
        .catch(err => console.log(err))
    }

    /* export function addOrderAxios(bookId, userId) {
        const token = JSON.parse(localStorage.getItem("token"));
      
        axios({
          method: "post",
          url: "/api/orders",
          data: { userId, bookId },
          headers: { authorization: `Bearer ${token}` },
        })
        .then(() =>
            SuccessToast("✨ 📚 Book has been successfully added to cart! 📚 ✨")
        )
        .catch(() => WarningToast("🦥 Book already added to cart 🦥"));
    } */

    /* 
    import axios from "axios";
import SuccessToast from "../hooks/toastNotifications/SuccessToast";
import WarningToast from "../hooks/toastNotifications/WarningToast";

export function getAllOrders() {
  const token = JSON.parse(localStorage.getItem("token"));
  return axios.get(`/api/orders/admin/checked`, {
    headers: { authorization: `Bearer ${token}` },
  });
}

export function addOrderAxios(bookId, userId) {
  const token = JSON.parse(localStorage.getItem("token"));

  axios({
    method: "post",
    url: "/api/orders",
    data: { userId, bookId },
    headers: { authorization: `Bearer ${token}` },
  })
    .then(() =>
      SuccessToast("✨ 📚 Book has been successfully added to cart! 📚 ✨")
    )
    .catch(() => WarningToast("🦥 Book already added to cart 🦥"));
}

export function checkoutOrder(cart) {
  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));

  return axios({
    method: "put",
    url: "/api/orders/checkout",
    data: {
      orders: cart,
      userId: user.id,
    },
    headers: { authorization: `Bearer ${token}` },
  });
}

export function deleteOrderAxios(orderId) {
  return axios.delete("/api/orders", { data: { orderId } });
}

export function updateQuantity(quantity, orderId) {
  const token = JSON.parse(localStorage.getItem("token"));

  return axios({
    method: "put",
    url: "/api/orders/quantity",
    data: { quantity, orderId },
    headers: { authorization: `Bearer ${token}` },
  });
}
 */

    return(    
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}> 
                <Text style={styles.title}>Complete el formulario con los datos de la Empresa</Text>
                <View style={{flex: 3}}>
                    
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder= 'Ingrese el nombre de la empresa'
                        />
                        )}
                        name="companyName"
                    />
                    {errors.companyName && <Text style={styles.textRequired}>Este campo el requerido.</Text>}

                    <Controller
                        control={control}
                        rules={{
                        required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder= 'Ingrese la sede de la empresa'
                        />
                        )}
                        name="companyHeadquartes"
                    />
                    {errors.companyHeadquartes && <Text style={styles.textRequired}>Este campo el requerido.</Text>}

                    <Controller
                        control={control}
                        rules={{
                        required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder= 'Ingrese la provincia'
                        />
                        )}
                        name="province"
                    />
                    {errors.province && <Text style={styles.textRequired}>Este campo el requerido.</Text>}

                    <Controller
                        control={control}
                        rules={{
                        required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder= 'Ingrese la localidad'
                        />
                        )}
                        name="location"
                    />
                    {errors.location && <Text style={styles.textRequired}>Este campo el requerido.</Text>}

                    <Controller
                        control={control}
                        rules={{
                        required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder= 'Ingrese la dirección'
                        />
                        )}
                        name="diretion"
                    />
                    {errors.diretion && <Text style={styles.textRequired}>Este campo el requerido.</Text>}

                    <Controller
                        control={control}
                        rules={{
                        required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder= 'Ingrese descripción'
                        />
                        )}
                        name="description"
                    />
                    {errors.description && <Text style={styles.textRequired}>Este campo el requerido.</Text>}

                    <Controller
                        control={control}
                        rules={{
                        required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder= 'Ingrese correo electrónico'
                        />
                        )}
                        name="email"
                    />
                    {errors.province && <Text style={styles.textRequired}>Este campo el requerido.</Text>}

                    <Controller
                        control={control}
                        rules={{
                        required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder= 'Engrese contraseña'
                        />
                        )}
                        name="password"
                    />
                    {errors.province && <Text style={styles.textRequired}>Este campo el requerido.</Text>}

                    <View style={styles.bottonAndText}>
                        <TouchableOpacity
                            style={styles.botton}
                            onPress={handleSubmit(sendRegister)}
                        >
                            <Text>Registrar Empresa</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        borderColor: 'rgba(0, 0, 121, 0.89)',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
        padding: 10,
    },
    bottonAndText: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
    },
    botton: {
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#87cefa'
    },
    logo: {
        flex: 3, 
        borderWidth: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 150,
    },
    textRequired: {
        paddingLeft: 15,
        color: 'red'
    },
    title: {
        color: 'rgba(0, 0, 121, 0.89)', 
        fontSize: 20, textAlign: 'center'
    },
});

export default Register