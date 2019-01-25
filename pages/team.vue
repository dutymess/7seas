<template>

  <div>

    <div id="page-head">
      <div class="title">{{ title }}</div>
      <img src="@/assets/images/slide.jpg" class="bg">
    </div>

    <div class="content">

      <div class="container">

        <!-- Head -->
        <div class="row" v-for="i in Math.ceil(Configs.Team.main.length / 2)">
          <div class="col-6" v-for="member in Configs.Team.main.slice((i - 1) * 2, i * 2)">
            <team :name="member.name" :position="member.position ? member.position : null" :desc="member.desc" />
          </div>
        </div>

        <!-- Others -->
        <div class="row" v-for="i in Math.ceil(Configs.Team.others.length / 3)">
          <div class="col-4" v-for="member in Configs.Team.others.slice((i - 1) * 3, i * 3)">
            <team :name="member.name" :position="member.position ? member.position : null" :desc="member.desc" />
          </div>
        </div>

      </div>

    </div>

  </div>

</template>

<script>

  import PartTitle from '@/components/PartTitle'
  import Team from '@/components/Team'

  export default {
    components: {
      PartTitle,
      Team,
    },

    data() {
      return {
        title: 'Our Team',

        members_head: [
          {name: '1', position: '2', desc: '3'},
          {name: '1', position: '2', desc: '3'},
          {name: '1', position: '2', desc: '3'},
          {name: '1', position: '2', desc: '3'},
          {name: '1', position: '2', desc: '3'},
        ],

        members_others: [
          {name: '1', position: '2', desc: '3'},
          {name: '1', position: '2', desc: '3'},
          {name: '1', position: '2', desc: '3'},
          {name: '1', position: '2', desc: '3'},
          {name: '1', position: '2', desc: '3'},
          {name: '1', position: '2', desc: '3'},
          {name: '1', position: '2', desc: '3'},
          {name: '1', position: '2', desc: '3'},
          {name: '1', position: '2', desc: '3'},
          {name: '1', position: '2', desc: '3'},
        ]
      }
    }
  }
</script>
