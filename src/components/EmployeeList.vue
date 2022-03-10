<template>
  <div>
    <employee-list-title />
    <v-row
      class="data"
      v-for="(employee, index) in getEmployees"
      :key="index"
      v-bind:style="{ background: index % 2 == 0 ? 'white' : 'aliceblue' }"
    >
      <v-col> <name-field :name="employee.name" /> </v-col>
      <v-col> <team-field :team="employee.team" /> </v-col>
      <v-col> <project-field :project="employee.projects" /> </v-col>
      <v-col> <sex-field :sex="employee.sex" /> </v-col>
      <v-col> <introduce-field :introduce="employee.introduce" /> </v-col>
      <v-col>
        <div>
          <v-btn
            class="warning"
            @click="updateEmployeeData(employee.employeeId)"
            >UPDATE</v-btn
          >
          <v-btn color="error" @click="deleteEmployeeData(employee.employeeId)"
            >DELETE</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import EmployeeListTitle from "@/components/EmployeeListTitle.vue";
import Employees from "@/assets/employees";

import {
  TeamField,
  IntroduceField,
  ProjectField,
  NameField,
  SexField,
} from "./EmployeeField.vue";
export default {
  name: "ExployeeList",
  data: () => ({ Employees }),
  components: {
    EmployeeListTitle,
    TeamField,
    IntroduceField,
    ProjectField,
    NameField,
    SexField,
  },
  computed: {
    getEmployees() {
      console.log(this.Employees);
      return this.Employees;
    },
  },
  methods: {
    updateEmployeeData: (employeeId) => {
      localStorage.setItem("employees", JSON.stringify(Employees));
      console.log(employeeId);
    },
    deleteEmployeeData: (employeeId) => {
      const employee_Index = Object.values(Employees).findIndex(
        (employee) => employee.employeeId === employeeId
      );
      console.log(employee_Index);
      console.log(Employees, employee_Index);
      Employees.splice(employee_Index, 1);
      // localStorage.setItem("employees", JSON.stringify(Employees));
    },
  },
  updated() {
    console.log("up");
  },
};
</script>