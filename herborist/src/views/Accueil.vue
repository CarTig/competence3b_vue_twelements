<template>
    <Bienvenue/>
    <Decouverte/>
    <Citation/>
    <Prog/>
    <Newsletter/>
    <Temoignages/>
    <Formules/>
</template>

<script>
import Bienvenue from '../components/Bienvenue.vue'
import Decouverte from '../components/Decouverte.vue'
import Citation from '../components/Citation.vue'
import Prog from '../components/Prog.vue'
import Newsletter from '../components/Newsletter.vue'
import Temoignages from '../components/Temoignages.vue'
import Formules from '../components/Formules.vue'


export default {
    name: 'Accueil',
    components:{
        Bienvenue,
        Decouverte,
        Citation,
        Prog,
        Newsletter,
        Temoignages,
        Formules,

    }
}

</script>