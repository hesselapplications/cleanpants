<template>
  <v-img :aspect-ratio="16/9" :src="require('@/assets/levels/' + levelId + '/' + image)">
    <slot></slot>
  </v-img>
</template>

<script>
export default {
  props: {
    levelId: Number,
    image: String
  }
};
</script>
