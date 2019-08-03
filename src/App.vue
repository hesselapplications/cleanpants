<template>
  <div id="app">
    <BackgroundImage :levelId="levelId" :image="node.image">
      <p>Level {{levelId}}</p>
      <p>Node {{nodeId}}</p>
      <p>{{node}}</p>
    </BackgroundImage>
  </div>
</template>

<script>
import BackgroundImage from "@/components/BackgroundImage.vue";
import level1 from "@/levels/1.js";
import level2 from "@/levels/2.js";

export default {
  components: {
    BackgroundImage
  },
  data() {
    return {
      levels: [],
      levelId: 1,
      nodeId: 1
    };
  },
  computed: {
    level() {
      return this.levels.find(level => level.id == this.levelId);
    },
    node() {
      if (this.level == null) return null;
      return this.level.nodes.find(node => node.id == this.nodeId);
    }
  },
  created() {
    this.levels.push(level1.level);
    this.levels.push(level2.level);
  }
};
</script>
<style>
body {
  background: #ddd;
}
</style>

