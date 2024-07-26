import axios from "axios";

const restApiUrl = "http://localhost:8080/infos/employees";

 export const employeesList  = () => axios.get(restApiUrl);