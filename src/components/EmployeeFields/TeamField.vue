<template>
  <v-select :items="teams" label="Teams" :value="team" />
</template>

<script>
export default {
  name: "TeamField",
  data: () => ({
    teams: [
      "Mahjong",
      "Aloha",
      "Aurora",
      "Dora",
      "Hinoki",
      "Hikari",
      "Tempopo",
    ],
  }),
  props: {
    team: String,
  },
};
</script>