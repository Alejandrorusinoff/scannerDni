import React from "react";
import {useDispatch} from 'react-redux';

const dispatch = useDispatch()

export function handleOp(boxUno, setBoxUno, setBoxDos, setRole, state, condition) {
    if (!boxUno) {
        setBoxUno(state);
        setBoxDos(state);
        setRole(condition);
    }
}

/* export function handleYesOp1(params) {
    if (!boxUno1) {
        setBoxUno1(true);
        setBoxDos1(false);
        setRole1('si');
    }
}

export function handleNotOp(params) {
    if (!boxDos1) {
        setBoxDos1(true);
        setBoxUno1(false);
        setRole1('no');
    }
} */

export function trunc (x, posiciones = 0) {
    var s = x.toString()
    var l = s.length
    var decimalLength = s.indexOf('.') + 1
    if (l - decimalLength <= posiciones){
        return x
    }
    var isNeg  = x < 0
    var decimal =  x % 1
    var entera  = isNeg ? Math.ceil(x) : Math.floor(x)
    var decimalFormated = Math.floor(
        Math.abs(decimal) * Math.pow(10, posiciones)
    )
    var finalNum = entera + ((decimalFormated / Math.pow(10, posiciones))*(isNeg ? -1 : 1))
    return finalNum
}

export function suma() {
    if (temperature < 42) {
        const temp1 = temperature + 0.1  
        setTemperature(trunc(temp1, 1))
    }
}

export function resta() {
    if (temperature > 34) {
        const temp1 = (temperature - 0.1)
        setTemperature(trunc(temp1, 1))
    }
}

export function handleYesOp(checkboxState, setCheckboxState, setRole, positive, negative ) {
    if (!checkboxState) {
        setCheckboxState(!checkboxState);
        setRole(positive);
    }
    else{
        setCheckboxState(!checkboxState);
        setRole(negative);
    }
};

export function close() {
    dispatch(setUser(''));
}

