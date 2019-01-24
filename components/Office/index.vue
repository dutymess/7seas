<template>
  <div class="panel office">
    <div class="img"><img :src="imgUrl" :alt="title" v-if="img"></div>
    <div class="title">{{ title }}</div>
    <p v-html="desc"></p>
    <div class="email" v-if="email">Email: <a :href="email">{{ email }}</a></div>
  </div>
</template>

<script>

  let images = require.context('~/assets/images/offices', false, /\.svg$/);

  export default {
    name: "Office",

    props: {
      img: String,
      title: String,
      desc: String,
      email: String,
    },

    computed: {

      imgUrl(){
        return images(`./${this.img}.svg`)
      },

    }

  }
</script>

<style lang="scss" scoped>
  // Office
  .panel.office{
    margin-bottom: 30px;
    text-align: center;

    .img{
      padding: 40px 0;
      max-height: 180px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img{
      max-width: 160px;
      width: 100%;
      height: auto;
      vertical-align: middle;
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
    .email{
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 14px;
      color: #888888;
      line-height: 20px;
      padding: 0 10px 30px;
      text-align: center;
      margin: 0;

      a{
        color: #147b89;
        text-decoration: underline;

        &:hover{
          text-decoration: none;
        }
      }
    }
  }
</style>
