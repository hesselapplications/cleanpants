<template>
  <v-app>
    <v-app-bar color="primary" dark fixed app>
      <v-toolbar-title>One Pair of Clean Pants</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>Level {{levelId}}, Node {{nodeId}}</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container>
        <v-layout>
          <h4>Social Acceptibility Bar</h4>
        </v-layout>
        <v-layout>
          <v-flex xs10>
            <v-progress-linear color="light-blue" height="50" :value="socAccBar" striped></v-progress-linear>
          </v-flex>
          <v-flex xs2>
            <v-img :src="require('@/assets/levels/1/pants.png')" height="50"></v-img>
          </v-flex>
        </v-layout>
      </v-container>
      <BackgroundImage :levelId="levelId" :image="node.image"></BackgroundImage>
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
    Controls
  },
  data() {
    return {
      levels: [],
      levelId: 1,
      nodeId: 1,
      socAccBar: 100
    };
  },
  watch: {
    levelId: function() {
      this.socAccBar = 100;
    },
    nodeId: function() {
      console.log(this.node.socAccImpact);
      this.socAccBar += this.node.socAccImpact;
    }
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

