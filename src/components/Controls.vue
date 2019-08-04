<template>
  <v-bottom-sheet v-model="sheet" inset hide-overlay persistent>
    <v-sheet>
      <v-card-text>
        <vue-typer
          class="title font-weight-light"
          :text="node.text"
          @completed="completed"
          :repeat="0"
          :typeDelay="35"
        ></vue-typer>
      </v-card-text>
      <v-expand-transition>
        <div v-show="!typing">
          <!-- TIMER -->
          <v-progress-linear id="timer" v-if="node.timed" :value="timer"></v-progress-linear>

          <!-- ACTIONS -->
          <v-layout column>
            <v-flex v-for="(action, index) in node.actions" :key="index">
              <v-divider></v-divider>
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
import { setTimeout, clearTimeout } from "timers";

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
      randomSelection: null,
      timeout: null
    };
  },
  methods: {
    goTo(action) {
      this.$emit("goTo", action.goToLevel, action.goToNode);
      this.typing = true;
      clearTimeout(this.timeout);
      this.timer = 0;
    },
    completed() {
      this.$emit("doneTyping");
      this.typing = false;
      if (this.node.timed) {
        this.timer = 100;

        var self = this;
        this.timeout = setTimeout(() => {
          var actions = self.node.actions;
          var index = Math.floor(Math.random() * actions.length);
          self.randomSelection = index;

          self.timeout = setTimeout(() => {
            self.randomSelection = null;
            self.$refs[index][0].$el.click();
          }, 1000);
        }, 4000);
      }
    }
  }
};
</script>
<style scoped>
#timer /deep/ * {
  transition: width 4s linear !important;
}

.v-btn {
  white-space: normal !important;
}
</style>

