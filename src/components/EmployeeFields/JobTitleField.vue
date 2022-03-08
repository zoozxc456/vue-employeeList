<template>
  <v-radio-group label="JobTitle" :value="jobTitle">
    <v-radio
      v-for="(title,index) in jobTitles"
      :key="index"
      :label="`${title}`"
      :value="title"
    />
  </v-radio-group>
</template>

<script>
export default {
  name: "JobTitleField",
  data: () => ({
    jobTitles: ["PD", "Designer", "HR", "Direct", "Intern"],
  }),
  props: {
    jobTitle: String,
  },
};
</script>