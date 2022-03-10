<template>
  <v-textarea
    solo
    name="input-7-4"
    label="Introduce"
    no-resize
    :value="introduce"
  />
</template>

<script>
export default {
  name: "IntroduceField",
  props: {
    introduce: String,
  },
};
</script>