<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>	
import $root from './proto/proto.js';
console.log($root)
export default {
		name:"app"
}
</script>

<style scoped>
  #app{
        width: 100%;
        height: 100%;
  }
	
</style>
