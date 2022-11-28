<template>
    

    <nav class="
    relative
    w-full
    flex flex-wrap
    items-center
    justify-between
    py-4
    bg-white
    text-brown
    hover:text-green
    shadow-lg
    <!-- navbar navbar-expand-lg navbar-light -->
    ">
    <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6 md:text-xl">
        <router-link to="/" class="font-gustavo">Accueil</router-link> 
        <router-link to="/Programmes" class="font-gustavo">Programmes</router-link> 
        <router-link to="/Apropos" class="font-gustavo">A propos</router-link>
        <!--CETTE PARTIE A ETE REMPLACEE PAR LES ROUTER LINKS <p>Accueil</p>
        <p>Programmes</p> 
        <p>A propos</p> -->
    </div>
  </nav>

</template>

<script>
    export default{
        name:'Header'
    }
</script>