<template>
  <v-img id="image" :src="require('@/assets/levels/' + levelId + '/' + nodeId + '.png')"></v-img>
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
#image {
  height: 100%;
  width: 100%;
}
</style>

