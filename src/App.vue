<template>
  <div id="app">
    <BackgroundImage :levelId="levelId" :image="node.image">
      <h1>Level {{levelId}}</h1>
      <h1>Node {{nodeId}}</h1>
    </BackgroundImage>
    <v-bottom-sheet v-model="sheet" inset hide-overlay>
      <v-sheet class="text-center" height="200px">
        <h1>{{node.text}}</h1>
        <br>
        <v-btn
          v-for="(action, index) in node.actions"
          :key="index"
          @click="goTo(action.goToLevel, action.goToNode)"
        >{{action.text}}</v-btn>
      </v-sheet>
    </v-bottom-sheet>
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
      sheet: true,
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
  },
  methods: {
    goTo(levelId, nodeId) {
      if (levelId) this.levelId = levelId;
      if (nodeId) this.nodeId = nodeId;
    }
  }
};
</script>
<style>
body {
  background: #ddd;
}
</style>

