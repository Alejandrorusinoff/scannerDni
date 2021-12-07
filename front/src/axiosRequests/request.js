import axios from "axios";
import { func } from "prop-types";

export function getSingleBook(bookId) {
  return axios.get(`/api/books/id/${bookId}`);
}

export function getBookByTitle(input) {
  return axios.get(`/api/books/title/${input}`);
}

export function getBookByAuthorOrTitle(input) {
  return axios.get(`/api/books/authorTitle/${input}`);
}

export function getRandomBooks() {
  return axios.get(`/api/books/home`);
}

export function getBooksByCategory(category) {
  return axios.get(`/api/books/category/${category}`);
}

export function updateSingleBook(bookId, movieUpdatedProps) {
  const token = JSON.parse(localStorage.getItem("token"));

  return axios({
    method: "put",
    url: `/api/books/id/${bookId}`,
    data: movieUpdatedProps,
    headers: { authorization: `Bearer ${token}` },
  });
}

export function deleteBookAxios(bookId) {
  const token = JSON.parse(localStorage.getItem("token"));
  return axios({
    method: "delete",
    url: `/api/books/id/${bookId}`,
    headers: { authorization: `Bearer ${token}` },
  });
}

export function getBookRatingAxios(bookId) {
  return axios.get(`/api/books/ratings/${bookId}`);
}

export function postBookAxios(bookProps) {
  const token = JSON.parse(localStorage.getItem("token"));

  return axios({
    method: "post",
    url: `/api/books`,
    data: bookProps,
    headers: { authorization: `Bearer ${token}` },
  });
}


//////////////////////////



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