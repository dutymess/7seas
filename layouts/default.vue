<template>
  <div>

    <header>
      <div class="container justify-content-between">

        <a href="#" id="logo">
          <img src="@/assets/images/logo.svg" width="250">
        </a>

        <a href="#" id="menu-toggle" @click.prevent="menuToggle" :class="{active: menuActive}">
          <span></span>
          <span></span>
          <span></span>
        </a>

        <div class="desc" v-html="Configs.General.header_title"></div>

      </div>
    </header>
    <div class="container nav-container">
      <nav :class="{toggled: menuActive}">
        <ul>
          <li v-for="item in Configs.General.menu">

            <nuxt-link v-if="item.to" :to="item.to">{{ item.title }}</nuxt-link>
            <a href="#" @click.prevent v-else>{{ item.title }}</a>

            <ul v-if="item.children">
              <li v-for="child in item.children">
                <nuxt-link :to="child.to">{{ child.title }}</nuxt-link>
              </li>
            </ul>

          </li>
        </ul>
      </nav>
    </div>

    <nuxt/>

    <footer>
      <a href="#" id="logo-footer">
        <img src="@/assets/images/logo-footer.svg" width="250">
      </a>
      <div class="copyright" v-html="Configs.General.copyright"></div>
    </footer>

  </div>
</template>

<script>
  export default {

    data(){
      return {
        menuActive: false
      }
    },

    methods: {

      menuToggle(){
        this.menuActive = !this.menuActive;
      }

    }

  }
</script>

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

    @media (max-width: 767px) {
      padding-top: 30px;

      a#logo{
        width: 100%;
        text-align: center;
      }

      .container{
        flex-direction: column;
        height: auto;
        align-items: baseline;
      }
      .desc{
        margin-top: 20px;
        font-size: 12px;

        br{
          display: none;
        }
      }
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
        position: relative;

        a{
          display: inline-flex;
          font-size: 14px;
          font-family: 'IBM Plex Sans', sans-serif;
          font-weight: bold;
          text-transform: uppercase;
          margin: 0;
          line-height: 1;
          color: #747474;
          text-decoration: none;
          padding: 24px 15px;

          &.nuxt-link-exact-active{
            color: #11597E;
            background: #fafafa;
          }
        }

        &:hover{
          > a{
            background: #fafafa;
            color: #11597E;
          }
          ul{
            opacity: 1;
            visibility: visible;
          }
        }

        ul{
          padding: 5px 0;
          opacity: 0;
          visibility: hidden;
          position: absolute;
          top: 100%;
          left: 0;
          background: #ffffff;
          box-shadow: 0 4px 15px 0 rgba(0,0,0,0.10);
          transition: all 0.3s ease;

          li{
            width: 100%;
          }
          a{
            display: inline-flex;
            width: 100%;
            white-space: nowrap;
            padding: 15px;
            font-weight: normal;
          }
        }
      }
    }

    @media (max-width: 767px) {
      position: fixed;
      height: auto;
      top: 0;
      bottom: 15px;
      right: -100%;
      width: calc(100% - 15px);
      border-radius: 0 0 0 8px;
      margin-top: 0;
      align-items: baseline;
      justify-content: end;
      transition: all 0.3s ease;
      opacity: 0;
      visibility: hidden;
      z-index: 5000;
    }

    &.toggled{
      right: 0;
      opacity: 1;
      visibility: visible;

      ul{
        li{
          display: flex;
          flex-direction: column;

          a{
            padding: 18px 14px;
          }
        }
        ul{
          opacity: 1;
          visibility: visible;
          position: static;
          box-shadow: none;
          background: none;
          padding: 0 0 0 25px;

          li{
            a{
              padding: 12px 14px;
            }
          }
        }
      }
    }
  }

  // Menu toggle
  a#menu-toggle{
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 6000;
    display: none;

    @media (max-width: 767px) {
      display: inline-block;
    }

    span{
      display: block;
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
      position: relative;
      background: #fff;
      border-radius: 3px;
      z-index: 1;
      transform-origin: 4px 0px;
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), background 0.5s cubic-bezier(0.77,0.2,0.05,1.0), opacity 0.55s ease, -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);

      &:nth-last-child(2) {
        transform-origin: 0 100%;
      }
    }

    &.active{
      span {
        opacity: 1;
        transform: rotate(45deg) translate(2px, -1px);
        background: #232323;

        &:nth-last-child(2) {
          opacity: 0;
          transform: rotate(0deg) scale(0.2, 0.2);
        }
        &:nth-last-child(1){
          transform: rotate(-45deg) translate(-1px, -1px);
        }
      }
    }
  }

  // Footer
  footer{
    text-align: center;
    padding: 70px 0 40px;
    background: #fafafa;
    border-top: 1px solid #DEDEDE;

    .copyright{
      margin-top: 70px;
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 12px;
      color: #aaaaaa;
    }
  }
</style>
