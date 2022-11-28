<template>
    <div>
    <header>
      <!-- Background image -->
      <div class="relative overflow-hidden bg-no-repeat bg-cover" style="
        background-position: 50%;
        background-image: url('img/BackgroundCafe.jpg');
        height: 500px;
      ">
        <div class="font-tomarik text-brown absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style="background-color: rgba(253, 253, 253, 0.75)">
          <div class="flex justify-center items-center h-full">
            <div class="flex flex-col items-center text-center px-6 md:px-12">
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
</template>

<script>
    export default{
        name:'Bienvenue',
    }

</script>

