<template>
  <v-layout align-center justify-center>
    <v-flex shrink>
      <img id="image" :src="require('@/assets/levels/' + levelId + '/' + nodeId + '.png')"/>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    levelId: Number,
    nodeId: Number,
    image: String
  }
};
</script>
<style>
img {
  width: 100%;
}
</style>

