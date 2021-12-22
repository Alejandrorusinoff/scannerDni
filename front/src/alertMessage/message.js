import React from "react";
import { showAlert, closeAlert } from "react-native-customisable-alert";
import { showMessage } from "react-native-flash-message";

export function requireOptionMessage() {
    showAlert({
        title:"Error",
        message: "Debe elegir una opción",
        alertType: 'error',
        onPress: () => {
          closeAlert()
        }
    })
}

export function msjFlash(data, type, icon) {
    showMessage({
        message: data,
        type: type,
        icon: icon
    })
}

