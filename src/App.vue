<template>
  <v-app>
    <v-app-bar color="primary" dark fixed app>
      <v-toolbar-title>One Pair of Clean Pants</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>Level {{levelId}}</v-toolbar-title>
    </v-app-bar>
    <v-content class="white">
      <v-container>
        <v-layout>
          <h4>Social Acceptibility Bar</h4>
        </v-layout>
        <v-layout>
          <v-flex grow>
            <v-progress-linear color="light-blue" height="50" :value="socAccBar" striped></v-progress-linear>
          </v-flex>
          <v-flex shrink>
            <img :src="require('@/assets/status/'+pantsImage)" style="height: 50px"/>
          </v-flex>
        </v-layout>
      </v-container>
      <BackgroundImage :levelId="levelId" :nodeId="nodeId" :image="node.image"></BackgroundImage>
      <Controls :node="node" @goTo="goTo" @doneTyping="socAccBar += node.socAccImpact"></Controls>
      <v-dialog persistent v-model="dialog" max-width="300px">
        <v-card>
          <v-card-title class="headline">Your pants are ruined! Better luck next time</v-card-title>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="dialog = false; nodeId = 1">Try Again</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
      dialog: false,
      levels: [],
      levelId: 1,
      nodeId: 1,
      socAccBar: 100,
      pantsImage: "Clean.png"
    };
  },
  watch: {
    nodeId() {
      if (this.nodeId == 1) {
        this.socAccBar = 100;
      }
    },
    socAccBar() {
      switch (true) {
        case this.socAccBar > 75:
          this.pantsImage = "Clean.png";
          break;
        case this.socAccBar <= 75 && this.socAccBar > 50:
          this.pantsImage = "KindaDirty.png";
          break;
        case this.socAccBar <= 50 && this.socAccBar > 25:
          this.pantsImage = "MoreDirty.png";
          break;
        case this.socAccBar <= 25 && this.socAccBar > 0:
          this.pantsImage = "Dirty.png";
          break;
        case this.socAccBar <= 0:
          this.pantsImage = "Ruined.png";
          this.dialog = true;
          break;
        default:
      }
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

