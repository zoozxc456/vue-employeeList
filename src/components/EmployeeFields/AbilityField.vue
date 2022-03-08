<template>
  <v-slider
    step="1"
    max="10"
    mix="0"
    :value="ability"
    label="Ability"
    thumb-label
    ticks
  />
</template>

<script>
export default {
  name: "AbilityField",
  data(){
    return{
      self_ability :this.ability
    }
  },
  props: {
    ability: Number,
  },
  
  mounted(){
    console.log("ch,mounted")
  },
  updated(){
    console.log(this.ability)
  },
  beforeDestroy(){
    
    console.log(this.$parent)
  }
};
</script>