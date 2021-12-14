import React from "react";
import { View, Text, TextInput, TouchableOpacity} from "react-native";
import { useForm, Controller } from "react-hook-form";
import styles from "../styles/recoverPasswordStyles";

const RecoverPassword = ({sendEmail}) => {
    const { control, handleSubmit, formState: { errors } } = useForm();

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
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
                            placeholder= 'Ingrese Correo electrónico'
                            keyboardType="email-address"
                        />
                        )}
                        name="email"
                    />
                    {errors.email && <Text style={styles.textRequired}>Este campo el requerido.</Text>}
                    <View style={styles.fixToText}>
                        <TouchableOpacity onPress={handleSubmit(sendEmail)} style={styles.botton}><Text>Confirmar</Text></TouchableOpacity>
                    </View>
                </View>
        </View>
    )
}

export default RecoverPassword;