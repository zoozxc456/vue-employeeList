<template>
  <div>
    <v-checkbox
      v-for="(projectItem, index) in projects"
      :key="index"
      :label="projectItem"
    ></v-checkbox>
  </div>
</template>

<script>
export default {
  name: "ProjectField",
  data() {
    return {
      projects: ["To-Do List", "Employee List"],
    };
  },
  props: {
    project: Array,
  },
  mounted() {
    // console.log(this.project);
      console.log(this.project);
  },
  methods: {},
};
</script>