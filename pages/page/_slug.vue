<template>

  <div>

    <div id="page-head">
      <div class="title">{{ title }}</div>
      <img src="@/assets/images/slide.jpg" class="bg">
    </div>

    <div class="container">

      <div class="row">

        <div class="col-10 col-center">

          <div class="content" v-html="content"></div>

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

    data(){
      return{
        title: 'TERMS and CONDITIONS of SERVICES',
        content: '<p>We thank you for having retained our services or for having considered retaining our services. For the sake of good order, please take note of the below TERMS and CONDITIONS of our SERVICES. If the same are not agreed please cancel any instructions you may have given us or refrain from instructing us. Cancellation should be made in writing.</p>' +
          '<p>Our terms of engagement and terms of services warranted binding on clients are:</p>' +
          '<p>Our services are rendered on the basis of normal diligence only and any report or advice is intended for the sole use of the person or organisation to whom it is addressed and no liability of any nature whatsoever shall be assumed to any other party in respect of its contents.</p>' +
          '<p>If you do not read or understand English it is your responsibility to advise us or to refrain from instructing us. You can reach us at +357 25 818 020 or at <a href="#">ho@7seas.be</a> for any advice you may need on the above.</p>' +
          '<p></p><p></p><p></p>' +
          '<p>Seven Seas & Co Ltd.</p>' +
          '<p>Directors</p>' +
          '<p>Issued in Limassol on 30th June 2009</p>'
      }
    }
  }
</script>

<style lang="scss">
  #page-head{
    width: 100%;
    height: 260px;
    text-align: center;
    position: relative;
    margin-top: -34px;

    &:after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(#000, 0.8);
      z-index: 20;
    }

    .title{
      font-family: 'IBM Plex Sans Condensed', sans-serif;
      font-size: 28px;
      font-weight: bold;
      color: #ffffff;
      text-transform: uppercase;
      padding: 130px 0 90px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 40;
      letter-spacing: 3px;
    }
    .bg{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  // Content
  //------------------------------------------------
  .content{
    padding: 70px 0 120px;

    p{
      font-size: 16px;
      line-height: 28px;
      color: #555555;
      margin: 0 0 15px;
      min-height: 15px;
    }
    a{
      color: #147b89;
      text-decoration: underline;

      &:hover{
        text-decoration: none;
      }
    }
  }
</style>
