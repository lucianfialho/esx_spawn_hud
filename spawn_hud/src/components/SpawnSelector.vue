<template>
  <div class="panel">
    <div class="header">
      <h1>SpawnManger: Select local to spawn</h1>
    </div>
    <div class="main">
      <ul>
        <template v-for="(local, index) in locals">
          <li :key="index" >
            <a @click.prevent="selectLocal(local)">{{local.label}}</a>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'spawn-selector',
  props: {
    locals: {
      type: Array,
      required: true,
    },
  },
  methods: {
    selectLocal (local) {
      this.$emit('localWasSelected', local)
    }
  }
};
</script>

<style lang='scss'>
.panel {
    color: white;
    width: 30vw;
    transform: perspective(1000px) rotateY(10deg);
    box-sizing: border-box;
    margin: 2rem 3rem;
    .header {
      background: rgba($color: #000000, $alpha: 0.5);
      padding: 1rem;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }

    .main {
      background: rgba($color: #000000, $alpha: 0.5);
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      min-height: 30vh;
    }
    ul {

      li {
        border-bottom: 1px solid white;
        &:last-child {
          border-bottom: 0;
        }

         a {
            background: rgba($color: #000000, $alpha: 0.5);
            color: white;
            text-decoration: none;
            padding: 2rem 3rem;
            min-width: 100%;
            display: block;
            
            
            &:hover{
              background: rgba($color: #000000, $alpha: 0.7);
              color: beige;
            }
          }
      }
       
    }
   
}

</style>
