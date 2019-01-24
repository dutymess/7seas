<template>
  <div class="panel service">
    <img :src="imgUrl" :alt="title" v-if="img">
    <div class="title">{{ title }}</div>
    <p>{{ desc }}</p>
  </div>
</template>

<script>

  let images = require.context('~/assets/images/services', false, /\.jpg$/);

  export default {
    name: "Service",

    props: {
      img: String,
      title: String,
      desc: String,
    },

    computed: {

      imgUrl(){
        return images(`./${this.img}.jpg`)
      },

    }

  }
</script>

<style lang="scss" scoped>
  // Service
  .panel.service{
    margin-bottom: 30px;
    text-align: center;

    img{
      width: 100%;
      height: auto;
      vertical-align: middle;
      margin-bottom: 35px;
    }

    .title{
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 20px;
      font-weight: bold;
      color: #147b89;
      text-align: center;
      margin-bottom: 20px;
    }
    p{
      display: inline-flex;
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 14px;
      color: #888888;
      line-height: 20px;
      padding: 0 10px 30px;
      text-align: justify;
      margin: 0;
    }
  }
</style>
