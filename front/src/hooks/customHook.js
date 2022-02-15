import React, {useState} from "react"
import { trunc } from "../generalFunctions/generalFunctions";

export const useHandleYesOp = () => {
    const [checkboxState, setCheckboxState] = useState(false);
    const [role, setRole] = useState('no');

    const check = () => {
        if (!checkboxState) {
            setCheckboxState(!checkboxState);
            setRole('si');
        }
        else{
            setCheckboxState(!checkboxState);
            setRole('no');
        }
    }
    return {role, checkboxState, check}
};

export const useTemperature = () => {
    const [temperature, setTemperature] = React.useState(36)

    const suma = () => {
        if (temperature < 42) {
            const temp1 = temperature + 0.1  
            setTemperature(trunc(temp1, 1))
        }
    }
    
    const resta = () => {
        if (temperature > 34) {
            const temp1 = (temperature - 0.1)
            setTemperature(trunc(temp1, 1))
        }
    }
    return {temperature, suma, resta}
}

export const useHandleOp = () => {
    const [boxUno, setBoxUno] = useState(false);
    const [boxDos, setBoxDos] = useState(false);
    const [role, setRole] = useState('');

    const handleOpA = () => {
        if (!boxUno) {
            setBoxUno(!boxUno); 
            setBoxDos(boxUno);
            setRole('si');
        }
    }
    const handleOpB = () => {
        if (!boxDos) {
            setBoxUno(boxDos); 
            setBoxDos(!boxDos);
            setRole('no');
        }
    }
    return {boxUno, boxDos, role, handleOpA, handleOpB}
}
