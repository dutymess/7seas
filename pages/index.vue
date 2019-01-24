<template>

  <div>

    <!-- Slide -->
    <div id="slide">
      <img src="@/assets/images/slide.jpg" class="slide">
      <img src="@/assets/images/slide-clip.svg" class="clip">
    </div>

    <!-- Services -->
    <section id="services">

      <part-title icon="services" title-first="Our" title-second="Services" />

      <div class="bg-img"><img src="@/assets/images/icons/services.svg"></div>

    </section>

    <!-- Offices -->
    <section id="offices">

      <part-title icon="offices" title-first="Our" title-second="Offices" />

      <div class="bg-img"><img src="@/assets/images/icons/offices.svg"></div>

    </section>

    <!-- Why Us -->
    <section id="why">

      <part-title icon="why" title-first="Why" title-second="Us" />

      <div class="bg-img"><img src="@/assets/images/icons/why.svg"></div>

    </section>

    <section class="container">


    </section>

  </div>

</template>

<script>

  import PartTitle from '@/components/PartTitle'

  export default {
    components: {
      PartTitle
    }
  }
</script>

<style lang="scss">
  #slide{
    width: 100%;
    height: calc(100vh - 170px);
    position: relative;
    margin-top: -34px;
    z-index: 100;

    img.slide{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    img.clip{
      width: 100%;
      height: 75px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: 50;
    }
  }

  // Section
  section{
    min-height: 100vh;
    position: relative;
    overflow: hidden;

    .bg-img{
      position: absolute;
      top: 200px;
      left: -230px;
      z-index: 0;
      opacity: 0.2;

      img{
        width: 640px;
        height: auto;
      }
    }
  }

  section#offices{
    background: #f9fbfb;
  }
</style>
