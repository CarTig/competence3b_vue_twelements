<template>
  <nav>
    <router-link to="/" class="font-gustavo">Accueil</router-link> |
    <router-link to="/Programes" class="font-gustavo">Programmes</router-link> |
    <router-link to="/Apropos" class="font-gustavo">A propos</router-link>
  </nav>
  <router-view/>
  <Foot/>
</template>

<script>
import Foot from './components/Foot.vue'

export default{
  name:'App',
  components:{
    Foot,
    
  }
}
</script>
 
<style src="./css/styles.css"></style>
<!-- <style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style> -->
