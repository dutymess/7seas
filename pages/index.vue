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

      <div class="container">

        <div class="row" v-for="i in Math.ceil(Configs.Services.length / 3)">
          <div class="col-4" v-for="service in Configs.Services.slice((i - 1) * 3, i * 3)">
            <service :img="service.img"
                     :title="service.title"
                     :desc="service.desc"
            />
          </div>
        </div>

      </div>

    </section>

    <!-- Offices -->
    <section id="offices">

      <part-title icon="offices" title-first="Our" title-second="Offices" />
      <div class="bg-img"><img src="@/assets/images/icons/offices.svg"></div>

      <!-- Main offices -->
      <div class="container">
        <div class="row" v-for="i in Math.ceil(Configs.Offices.main.length / 3)">
          <div class="col-4" v-for="office in Configs.Offices.main.slice((i - 1) * 3, i * 3)">
            <office :img="office.img"
                    :title="office.title"
                    :desc="office.desc"
                    :email="office.email"
            />
          </div>
        </div>
      </div>

      <!-- Lloyd's -->
      <part-title title-first="Lloyd’s" title-second="Agent in" />
      <div class="container">
        <div class="row" v-for="i in Math.ceil(Configs.Offices.lloyds.length / 3)">
          <div class="col-4" v-for="office in Configs.Offices.lloyds.slice((i - 1) * 3, i * 3)">
            <office :img="office.img"
                    :title="office.title"
                    :desc="office.desc"
                    :email="office.email"
            />
          </div>
        </div>
      </div>

      <!-- Others -->
      <part-title title-first="Other" title-second="Offices" />
      <div class="container">
        <div class="row" v-for="i in Math.ceil(Configs.Offices.others.length / 3)">
          <div class="col-4" v-for="office in Configs.Offices.others.slice((i - 1) * 3, i * 3)">
            <office :img="office.img"
                    :title="office.title"
                    :desc="office.desc"
                    :email="office.email"
            />
          </div>
        </div>
      </div>

    </section>

    <!-- Why Us -->
    <section id="why">

      <part-title icon="why" title-first="Why" title-second="Us" />
      <div class="bg-img"><img src="@/assets/images/icons/why.svg"></div>

      <div class="container">

        <div class="row">

          <div class="col-6 col-center">

            <div id="why-items">

              <div class="item" v-for="reason in Configs.Reasons">
                <div class="title" v-html="reason.title"></div>
                <p v-html="reason.desc"></p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

    <!-- LLoyde's -->
    <div id="banner">
      <div class="container">
        <div class="row">
          <div class="col-3">
            <img src="@/assets/images/lloyds.jpg" width="160" alt="Lloyd's Agent in D.R. of the Congo, Angola and Morocco">
          </div>
          <div class="col-9">

            <h1>Lloyd's Agent in D.R. of the Congo, Angola and Morocco</h1>

            <h2>Angola</h2>
            <p>The leading Marine Surveyors and Average Adjusting Company of Angola Luanda - Lobito - Namibe - Soyo - Cabinda</p>

            <h2>Democratic Republic of the Congo & Morocco</h2>
            <p>Our Team of Master Mariners and experienced surveyors is availableto attend all over D.R.C. and Morocco</p>

          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>

  import PartTitle from '@/components/PartTitle'
  import Service from '@/components/Service'
  import Office from '@/components/Office'

  export default {

    components: {
      PartTitle,
      Service,
      Office
    },

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
      bottom: -1px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 50;

      @media (max-width: 767px) {
        height: auto;
      }
    }
  }

  // Section
  section{
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    padding-bottom: 60px;

    .bg-img{
      position: absolute;
      top: 200px;
      left: -230px;
      z-index: -10;
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

  // Why items
  #why-items{
    .item{
      position: relative;
      padding-left: 30px;
      display: inline-flex;
      width: 100%;
      flex-direction: column;

      &:before{
        content: '';
        display: inline-block;
        width: 15px;
        height: 15px;
        background: #aaaaaa;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
      }
      &:after{
        content: '';
        position: absolute;
        top: 0;
        left: 7px;
        z-index: 5;
        border-left: 1px dashed #aaa;
        width: 1px;
        height: 100%;
      }

      &:last-child:after{
        display: none;
      }

      .title{
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 20px;
        color: #147b89;
        margin-bottom: 10px;
        margin-top: -5px;
      }
      p{
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 14px;
        color: #747474;
        line-height: 18px;
        padding-bottom: 40px;
        margin: 0;
      }
    }
  }

  // Banner
  //------------------------------------------------
  #banner{
    background-image: linear-gradient(-135deg, #2792A7 0%, #112F6E 100%);
    padding: 80px;

    @media (max-width: 767px) {
      padding: 20px;

      img{
        margin-bottom: 20px;
      }
    }

    h1{
      font-family: 'IBM Plex Sans Condensed', sans-serif;
      font-size: 32px;
      font-weight: bold;
      margin: 0 0 30px;
      color: #ffffff;
    }
    h2{
      font-family: 'IBM Plex Sans Condensed', sans-serif;
      font-size: 18px;
      font-weight: bold;
      margin: 0 0 10px;
      color: #ffffff;
    }
    p{
      font-family: 'IBM Plex Sans Condensed', sans-serif;
      font-size: 14px;
      margin: 0 0 30px;
      color: #ffffff;
    }
  }
</style>
