const {connection} = require('./index')
const Organization = require('./models/organization')
const EmployeeData = require('./models/employeeData')
const CovidEmployeeData = require('./models/covidEmpleyeeData')

function deleteModels() {
  const models = [Organization, EmployeeData, CovidEmployeeData]
  return Promise.all(models.map(model => model.remove({})))
    
}

const setupSeed = async () => {
  console.log("SEED STARTING");
  const seedAdmin = {
    companyName: "Alejandro",
    companyHeadquartes: "Rusinoff",
    province: "Buenos Aires",
    location: "Malvinas Argentinas",
    diretion: "Mariano Boedo",
    description: "Dueño del código",
    email: "ale_rusinoff13@hotmail.com",
    password: "123",
    isAdmin: true,
  }
  return deleteModels().then(() => Organization.create(seedAdmin))
}

try {
  connection.once("open", () =>
    setupSeed().then(() => {
      console.log("SEED TERMINADO");
      process.exit(0);
    })
  );
} catch (err) {
  console.log("Somethin went wrong on the seed process", err.message);
  process.exit(1);
}
