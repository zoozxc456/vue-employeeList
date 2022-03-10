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
    titles: ["姓名", "團隊", "專案", "性別", "自我介紹", "動作"],
  }),
};
</script>