<template>
    <section class="text-orange-900 bg-amber-200 opacity-50 my-3 lg:h-80 lg:flex-col lg:space-y-14">
      <h3 class=" text-center my-2 py-3 text-2xl lg:text-4xl lg:py-6" >On reste en contact ?</h3>
      <div class="flex justify-center">
        <label for="adressemail"></label>
        <input class="border-solid border-2 rounded-full text-center lg:text-3xl" type="text" id="adressemail" name="adressemail" placeholder="Adresse mail">
      </div>
      <div class="flex justify-center">
        <div class="w-28 border-solid border-2 rounded-full text-center my-6 lg:w-40">
        <button type="submit" class="lg:text-2xl">Je m'inscris !</button>
        </div>
      </div>
    </section>
</template>

<script>
    export default{
        name:'Newsletter'
    }
</script>