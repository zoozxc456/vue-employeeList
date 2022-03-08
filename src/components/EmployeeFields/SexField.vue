<template>
  <v-radio-group label="Sex" :value="sex">
    <v-radio v-for="(sexType,index) in sexs" :key="index" :label="`${sexType}`" :value="sexType" />
  </v-radio-group>
</template>

<script>
export default {
  name: "SexField",
  data: () => ({
    sexs: ["male", "female"],
  }),
  props:{
    sex:String
  },
};
</script>
