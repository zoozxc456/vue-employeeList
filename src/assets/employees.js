const EMPLOYEES_DEFAULT = [{
    "employeeId": "TP0122",
    "name": "henry",
    "team": "Mahjong",
    "sex": "male",
    "projects": ["To-Do List"],
    "introduce": "nice",
}, {
    "employeeId": "TP0199",
    "name": "maggie",
    "team": "Mahjong",
    "sex": "female",
    "projects": [],
    "introduce": "beauty",
}];

const EMPLOYEES = localStorage.getItem("employees") !== null ? JSON.parse(localStorage.getItem("employees")) : EMPLOYEES_DEFAULT;

export default EMPLOYEES;