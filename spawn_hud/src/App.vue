<template>
  <div id="app" v-if="showSpawnHud">
    <SpawnSelector :locals="locals" @localWasSelected="playerSpawn" />
  </div>
</template>

<script>
import SpawnSelector from './components/SpawnSelector';
import Nui from './utils/Nui';

export default {
  name: 'app',
  components: {
    SpawnSelector,
  },
  data() {
    return {
      showSpawnHud: true,
      locals: [{ 
          "x": 294.50 , 
          "y": 178.42, 
          "z": 104.24,
          "label": 'Vinewood'
      },{ 
          "x": 294.50 , 
          "y": 178.42, 
          "z": 104.24,
          "label": 'Vinewood'
      },{ 
          "x": 294.50 , 
          "y": 178.42, 
          "z": 104.24,
          "label": 'Vinewood'
      }]
    };
  },
  destroyed() {
    window.removeEventListener('message', this.listener);
  },
  mounted() {
    this.listener = window.addEventListener(
      'message',
      event => {
        const item = event.data || event.detail;
        
        if (item.type && item.type == 'open') {
          this.showSpawnHud = true
          this.locals = item.locals
        } 
      },
      false,
    );
  },
  methods: {
    playerSpawn (data) {
      Nui.send()
    }
  },
};
</script>

<style lang="scss">
/* Want nice animations? Check out https://github.com/asika32764/vue2-animate */
/* @import 'https://unpkg.com/vue2-animate/dist/vue2-animate.min.css'; */
html {
  background: transparent;
  overflow-y: hidden;
  
}
</style>
