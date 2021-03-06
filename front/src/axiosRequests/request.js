import axios from "axios";

export function postSearchEmployeeByDNI(dni, user) {
    return axios.post('http://localhost:3001/api/employee/searchEmployeeByDNI',
      {
          dni: dni.BuscarEmpleado,
          organizationId: user.company._id
      },
      {headers: {authorization: `Bearer ${user.token}`}},
    )
}

export function postAssociateEmployee(dni, user, data) {
    return axios.post('http://localhost:3001/api/employee/associateEmployee', 
        {
            dni: dni.BuscarEmpleado, 
            organizationId: user.company._id, 
            idEmployee: data._id
        }, 
        {
            headers: {authorization: `Bearer ${user.token}`}
        },
    )
}

export function postOrganizationEmployee(user) {
    return axios.post(`http://localhost:3001/api/employee/organizationEmployee`,
    {
        organizationId: user.company._id
    }, 
    {
        headers: {authorization: `Bearer ${user.token}`},
    })
}

export function postCovidData(temperature,smell,taste,cough,soreThroat,breathe,diarrhea,headache,vomits,musclePain,dni,employeeId,peopleCovid,lastDaysPeople,cancer,diabetes,liverDisease,chronicIllness,respiratoryDisease,heartDisease,lowDefenses, organizationId, user) {
    return axios.post('http://localhost:3001/api/employee/covidData',
    {
        temperature,
        smell,
        taste,
        cough,
        soreThroat,
        breathe,
        diarrhea,
        headache,
        vomits,
        musclePain,
        dni, 
        employeeId,
        peopleCovid,
        lastDaysPeople,
        cancer,
        diabetes,
        liverDisease,
        chronicIllness,
        respiratoryDisease,
        heartDisease,
        lowDefenses,
        organizationId,
    },
    {headers: {authorization: `Bearer ${user.token}`}})
}

export function postEmployeeAdd(name, lastName, dni, age, diretion, organizationName, organizationId, user) {
    return axios.post('http://localhost:3001/api/employee/add',
    {
        name, 
        lastName, 
        dni, 
        age, 
        diretion, 
        organizationName,
        organizationId,
    },
    {headers: {authorization: `Bearer ${user.token}`}})
}

export function postLogin(email, password) {
    return axios.post('http://localhost:3001/api/organization/login', {
        email,
        password
    })
}

export function postRegister(companyHeadquartes,companyName,description,diretion,email,location,password,province) {
    return axios.post('http://localhost:3001/api/organization/register', {
        companyHeadquartes,
        companyName,
        description,
        diretion,
        email,
        location,
        password,
        province
    })
}

export function getSearchAllEmployeeCovidData(_id, user) {
    return axios.get(`http://localhost:3001/api/employee/searchAllEmployeeCovidData/${_id}`,
    {headers: {authorization: `Bearer ${user.token}`}},
    )
}