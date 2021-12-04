import { createAction, createReducer } from "@reduxjs/toolkit";

const fullData = {
    temperature: null,
    smell: null, //olfato
    taste: null, //gusto
    cough: null, //tos
    soreThroat: null, //dolor de garganta
    breathe: null, //respirar
    diarrhea: null, //diarrea
    headache: null, //dolor de cabeza
    vomits: null, //vomitos
    musclePain: null, //dolor muscular //
    peopleCovid: null, //trabajo con gente con covid
    lastDaysPeople : null, // si estuviste los ultimos dias con gente con covid
    cancer: null, //cancer
    diabetes: null, //diabetes
    liverDisease: null, //enfermedad hapatica
    chronicIllness: null, //enfermedad cronica
    respiratoryDisease: null, //enfermedad respiratoria
    heartDisease: null, //enfermedad cardiologica
    lowDefenses: null //baja defensas
}

export const setDataCovid = createAction('SET_DATA_COVID')
const dataCovidReducer = createReducer(fullData,{
    [setDataCovid]: (state, action) => action.payload
})

export default dataCovidReducer