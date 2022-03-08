<template>
  <v-app>
    <v-main style="padding: 5vw">
      <add-employee-dialog />
      <employee-list />
    </v-main>
  </v-app>
</template>

<script>
// import ExployeeList from "@/components/EmployeeList.vue";
import AddEmployeeDialog from "@/components/AddEmployeeDialog.vue";
import EmployeeList from './components/EmployeeList.vue';
export default {
  name: "App",

  components: { AddEmployeeDialog,  EmployeeList },

  data: () => ({
    dialog: false,
  }),
};
</script>

<style scoped>
.data {
  border: 1px black solid;
  border-bottom: none;
}
.row + .row {
  margin: 0;
}
.row {
  margin: 0;
  height: max-content;
}
.row.title {
  border: 1px black solid;
  border-bottom: none;
}
.data.row:last-child {
  border-bottom: 1px solid black !important;
}
.v-dialog .col {
  padding: 0 12px;
}
.v-dialog .v-card__title {
  background: #4caf50 !important;
  color: white;
  text-align: center;
  font-weight: 900 !important;
  margin: auto;
  justify-content: center;
}
.v-dialog .v-card__text {
  padding: 0 24px 10px !important;
}
.v-input__control {
  align-self: center;
}
.v-input__slot {
  margin: 0 !important;
}
.v-btn {
  width: 100%;
  margin: 10px 0;
}
</style>
