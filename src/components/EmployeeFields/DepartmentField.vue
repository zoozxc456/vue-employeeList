<template>
  <v-select :items="departments" label="Departments" :value="department" />
</template>

<script>
export default {
  name: "DepartmentField",
  data: () => ({
    departments: [
      "GMTW",
      "PDTW",
      "ODDV",
      "FLDP",
      "ITDP",
      "TWFG",
      "TWGS",
      "TWTG",
      "TWSP",
      "TWCM",
      "TWSC",
      "TWMN",
      "ODTW",
    ],
     self_department : "",
  }),
  props: {
    department: String,
  },
  methods: {
    constructor() {
      this.self_department = this.department;
    },
  },
  mounted() {
    this.constructor();
  },
};
</script>