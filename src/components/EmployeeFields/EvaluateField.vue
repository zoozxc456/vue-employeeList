<template>
  <v-textarea
    solo
    name="input-7-4"
    label="Evaluate"
    no-resize
    :value="evaluate"
    @change="updateEvaluateValue"
  />
</template>

<script>
export default {
  name: "EvaluateField",
  props: {
    evaluate: String,
  },
  data() {
    return { self_evaluate: this.evaluate };
  },

  methods: {
    updateEvaluateValue: () => {
      console.log(this);
      // console.log(this.evaluate)
      // this.$emit("update",this.evaluate)
    },
  },
};
</script>