<template>
  <div class="part-title">
    <img :src="imgUrl" :alt="`${titleFirst} ${titleSecond}`" v-if="icon">
    <div class="title">
      <span class="first" v-if="titleFirst">{{ titleFirst }}</span>
      <span class="second" v-if="titleSecond">{{ titleSecond }}</span>
    </div>
  </div>
</template>

<script>

  let images = require.context('~/assets/images/icons', false, /\.svg$/);

  export default {
    name: "PartTitle",

    props: {
      icon: String,
      titleFirst: String,
      titleSecond: String,
    },

    computed: {

      imgUrl(){
        return images(`./${this.icon}.svg`)
      },

    }

  }
</script>

<style lang="scss" scoped>
.part-title{
  padding: 60px 0 50px;
  text-align: center;

  img{
    width: 64px;
    height: auto;
    margin-bottom: 20px;
    vertical-align: middle;
  }
  .title{
    font-family: 'IBM Plex Sans Condensed', sans-serif;
    font-size: 28px;

    .first{
      color: #999999;
    }
    .second{
      color: #147b89;
    }
  }
}
</style>
