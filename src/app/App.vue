<template>
  <div class="app">
    <div class="tabs">
    Burned Pancakes
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class extends Vue {
    public name = 'App';
  }
</script>

<style lang="scss" scoped>
  .app {
    color: get-color(basic, brighter);
  }
</style>
