<template>
  <div class="about">
    <h1 class="text-3xl font-gustavo text-ocre">This is an about page</h1>
  </div>

  <div>
    <section class="font-gustavo text-orange-900 bg-amber-200 opacity-50 my-3 lg:h-80 lg:flex-col lg:space-y-14">
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

    <!-- ___________ div des 3 cards ___________ -->


      <div>
        <header>


  <!-- Background image -->
  <div class="relative overflow-hidden bg-no-repeat bg-cover" style="
    background-position: 50%;
    background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp');
    height: 350px;
  ">
    <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
      style="background-color: rgba(0, 0, 0, 0.75)">
      <div class="flex justify-center items-center h-full">
        <div class="text-center text-white px-6 md:px-12">
          <h1 class="text-5xl font-bold mt-0 mb-6">Heading</h1>
          <h3 class="text-3xl font-bold mb-8">Subeading</h3>
          <button type="button"
            class="inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            data-mdb-ripple="true" data-mdb-ripple-color="light">
            Get started
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Background image -->
</header>
      </div>

      <div>
        <header>
      <!-- Background image -->
      <div class="relative overflow-hidden bg-no-repeat bg-cover" style="
        background-position: 50%;
        background-image: url('img/BackgroundCafe.jpg');
        height: 500px;
      ">
        <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style="background-color: rgba(253, 253, 253, 0.75)">
          <div class="flex justify-center items-center h-full">
            <div class="flex flex-col items-center text-center text-orange-900 px-6 md:px-12">
              <h1 class="text-5xl font-semibold mt-0 mb-6 md:text-7xl lg:text-8xl">Bienvenue chez</h1>
              <div class="md:w-60  lg:w-84">
                <img class="" src="img/logo_light_fond_transparent.png" alt="logo">
              </div>
              <h1 class="text-5xl font-semibold mt-2 mb-4 md:text-7xl lg:text-8xl">Personal Herborist</h1>
            </div>
          </div>
        </div>
      </div>
      <!-- Background image -->
    </header>


      </div>

  </div>
</template>


<!-- <style src="../css/styles.css"></style> -->