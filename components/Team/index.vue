<template>
  <div class="panel team">
    <div class="head">
      <div class="img"><img src="@/assets/images/user.svg" :alt="name"></div>
      <div class="name">{{ name }}</div>
      <div class="position">{{ position }}</div>
    </div>
    <p v-html="desc"></p>
  </div>
</template>

<script>

  export default {
    name: "Team",

    props: {
      name: String,
      position: String,
      desc: String,
    },

  }
</script>

<style lang="scss" scoped>
  // Office
  .panel.team{
    text-align: center;
    background: #fafafa;
    padding: 0;

    .head{
      background: #ffffff;
      padding: 30px;
      border-radius: 8px 8px 0 0;
    }
    .img{
      text-align: center;
      padding: 10px 0 20px;
    }
    img{
      width: 64px;
      vertical-align: middle;
    }

    .name{
      font-family: 'IBM Plex Sans Condensed', sans-serif;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 5px;
      color: #147b89;
    }
    .position{
      font-family: 'IBM Plex Sans Condensed', sans-serif;
      font-size: 16px;
      color: #147b89;
      margin-bottom: 10px;
    }
    p{
      font-size: 13px;
      color: #555555;
      padding: 25px 30px;
      line-height: 20px;
      text-align: left;
      margin-bottom: 0;
    }
  }
</style>
