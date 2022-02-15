import { useHandleYesOp, useHandleOp } from "../hooks/customHook"

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

export function close(disp, set, set1, set2) {
    disp(set(''))
    disp(set1([]))
    disp(set2([]))
}

export function lowerValidation(str) {
    return str.toLocaleLowerCase()
}

export function upperOneStr(str) {
    let word = str.charAt(0).toUpperCase() + str.slice(1).toLocaleLowerCase();
    return word
}

export function firstNameUp (str) {
    if (str.split(" ").length > 1) {
        let array = str.split(" ")
        let matriz = []
        for (let i = 0; i < array.length; i++) {
            matriz.push(upperOneStr(array[i]))
        }
        str = matriz.join(" ")
        return str
    }
    else {
        return upperOneStr(str)
    }
}

export function convertDni(dni) {
    let dataDNI = dni.split("@")
    let arrDNI = []
    for (let i = 0; i < dataDNI.length; i++) {
        if (dataDNI[i].split(" ").length > 1) {
            dataDNI[i] = dataDNI[i].split(" ")
            let matriz = []
            for (let j = 0; j < dataDNI[i].length; j++) {
                matriz.push(upperOneStr(dataDNI[i][j]))
            }
            dataDNI[i] = matriz.join(" ")
            arrDNI.push(dataDNI[i])
        }
        else {
            arrDNI.push(upperOneStr(dataDNI[i]))
        }
    }
    return arrDNI
}

export function checkBoxData1 (data) {
    let datos = []
    for (let i = 0; i < data.length; i++) {
        let dat = data[i]
        datos.push({'question': dat, 'hook': useHandleOp()})
    }
    return datos
}

export function checkBoxData2 (data) {
    let datos = []
    for (let i = 0; i < data.length; i++) {
        let dat = data[i]
        datos.push({'question': dat, 'hook': useHandleYesOp()})
    }
    return datos
}

