const EMPLOYEES_DEFAULT = [{
    "employeeId": "TP0122",
    "name": "henry",
    "department": "TWGS",
    "jobTitle": "Intern",
    "sex": "male",
    "evaluate": "nice",
    "ability": 8
}, {
    "employeeId": "TP0199",
    "name": "maggie",
    "department": "ODTW",
    "jobTitle": "HR",
    "sex": "female",
    "evaluate": "beauty",
    "ability": 10
}];

const EMPLOYEES = localStorage.getItem("employees")!==null ?JSON.parse(localStorage.getItem("employees")): EMPLOYEES_DEFAULT;

export default EMPLOYEES;