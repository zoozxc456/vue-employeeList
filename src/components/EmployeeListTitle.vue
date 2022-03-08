<template>
  <v-row class="text-center title">
    <v-col v-for="(title, index) in titles" :key="index">
      <label>{{ title }}</label>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "EmployeeListTitle",
  data: () => ({
    titles: ["姓名", "部門", "職位", "性別", "評價", "能力", "動作"],
  }),
};
</script>