<template>
  <div>

    <header>
      <div class="container">
        <a href="#" id="logo">
          <img src="@/assets/images/logo.svg" width="250">
        </a>
        <div class="desc">
          Average adjusters - Marine serveyors - Claims and recovery agents
          <br>
          Transport lawers - Marnine consultants and brokers
        </div>
      </div>
    </header>
    <div class="container">
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Hull</a></li>
          <li><a href="#">Cargo</a></li>
          <li><a href="#">Our Team</a></li>
          <li><a href="#">Our Clients</a></li>
          <li><a href="#">Africa</a></li>
          <li><a href="#">Indonesia</a></li>
          <li><a href="#">Terms and Conditions</a></li>
        </ul>
      </nav>
    </div>

    <nuxt/>
  </div>
</template>

<style lang="scss">
  html{
    padding: 0;
    margin: 0;
  }
  body{
    padding: 0;
    margin: 0;
  }
  header{
    background-image: linear-gradient(-135deg, rgba(39,146,167,0.60) 0%, rgba(17,47,110,0.60) 100%);
    padding-bottom: 30px;

    .container{
      height: 140px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .desc{
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: bold;
      font-style: italic;
      font-size: 14px;
      color: #ffffff;
    }
  }
  nav{
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    border: 1px solid #E7E7E7;
    box-shadow: 0 4px 15px 0 rgba(0,0,0,0.10);
    border-radius: 8px;
    margin-top: -32px;
    position: relative;
    z-index: 200;

    ul{
      list-style: none;
      display: inline-block;
      margin: 0;
      padding: 0;

      li{
        display: inline-block;
        list-style: none;

        a{
          font-size: 14px;
          font-family: 'IBM Plex Sans', sans-serif;
          font-weight: bold;
          text-transform: uppercase;
          margin: 0 15px;
          line-height: 1;
          color: #747474;
          text-decoration: none;

          &:hover{
            color: #11597E;
          }
        }
      }
    }
  }
</style>
