<template>
  <v-app>
    <v-app-bar color="primary" dark fixed app>
      <v-toolbar-title>One Pair of Clean Pants</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>Level {{levelId}}</v-toolbar-title>
    </v-app-bar>
    <v-content class="white">
      <BackgroundImage :levelId="levelId" :nodeId="nodeId" :image="node.image"></BackgroundImage>
      <Controls :node="node" @goTo="goTo"></Controls>
    </v-content>
  </v-app>
</template>

<script>
import BackgroundImage from "@/components/BackgroundImage.vue";
import Controls from "@/components/Controls.vue";
import level1 from "@/levels/1.js";
import level2 from "@/levels/2.js";

export default {
  components: {
    BackgroundImage,
    Controls,
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
  },
  methods: {
    goTo(levelId, nodeId) {
      if (levelId) this.levelId = levelId;
      if (nodeId) this.nodeId = nodeId;
      this.typing = true;
    }
  }
};
</script>

