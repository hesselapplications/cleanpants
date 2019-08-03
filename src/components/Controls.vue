<template>
  <v-bottom-sheet v-model="sheet" inset hide-overlay persistent>
    <v-sheet>
      <v-card-text>
        <vue-typer
          class="title font-weight-light"
          :text="node.text"
          @completed="completed"
          :repeat="0"
          :typeDelay="40"
        ></vue-typer>
      </v-card-text>
      <v-divider></v-divider>
      <v-expand-transition>
        <div v-show="!typing">
          <!-- TIMER -->
          <v-progress-linear id="timer" v-if="node.timed" :value="timer"></v-progress-linear>

          <!-- ACTIONS -->
          <v-layout>
            <v-flex grow v-for="(action, index) in node.actions" :key="index">
              <v-btn
                :disabled="randomSelection != null && randomSelection != index"
                :ref="index"
                x-large
                text
                block
                tile
                @click="goTo(action)"
              >{{action.text}}</v-btn>
            </v-flex>
          </v-layout>
        </div>
      </v-expand-transition>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
import { VueTyper } from "vue-typer";
import { setTimeout } from "timers";

export default {
  components: {
    VueTyper
  },
  props: {
    node: Object
  },
  data() {
    return {
      sheet: true,
      typing: true,
      timer: 0,
      randomSelection: null
    };
  },
  methods: {
    goTo(action) {
      this.$emit("goTo", action.goToLevel, action.goToNode);
      this.typing = true;
      this.timer = 0;
    },
    completed() {
      this.typing = false;
      if (this.node.timed) {
        this.timer = 100;
        setTimeout(this.randomlySelect, 4000);
      }
    },
    randomlySelect() {
      var actions = this.node.actions;
      var index = Math.floor(Math.random() * actions.length);
      this.randomSelection = index;

      var self = this;
      setTimeout(() => {
        self.$refs[index][0].$el.click();
        self.randomSelection = null;
      }, 1000);
    }
  }
};
</script>
<style scoped>
.flex:not(:last-child) {
  border-right: 1px solid rgba(0, 0, 0, 0.12);
}

#timer /deep/ * {
  transition: width 4s linear !important;
}
</style>

