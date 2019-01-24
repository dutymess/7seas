<template>

  <div>

    <div id="slide">
      <img src="@/assets/images/slide.jpg" class="slide">
      <img src="@/assets/images/slide-clip.svg" class="clip">
    </div>

    <section class="container">

    </section>

  </div>

</template>

<script>
  export default {
    components: {}
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
</style>
