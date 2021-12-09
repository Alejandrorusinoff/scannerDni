import React from "react";
import {useDispatch} from 'react-redux';

const dispatch = useDispatch()

export function handleOp(boxUno, set1, set2, setRole, state1, state2, condition) {
    if (!boxUno) {
        set1(state1);
        set2(state2);
        setRole(condition);
    }
}

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

export function suma(temp, setTemp, fn) {
    if (temp < 42) {
        const temp1 = temp + 0.1  
        setTemp(fn(temp1, 1))
    }
}

export function resta(temp, setTemp, fn) {
    if (temp > 34) {
        const temp1 = (temp - 0.1)
        setTemp(fn(temp1, 1))
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

export function close(disp, set) {
    disp(set(''));
}

