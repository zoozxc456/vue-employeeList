<template>
  <v-text-field :counter="10" label="name" required :value="name" />
</template>

<script>
export default {
  name: "NameField",
  data: () => ({}),
  props: {
    name: String,
  },
};
</script>