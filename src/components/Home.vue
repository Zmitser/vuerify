<template lang="pug">
  v-container
    v-layout(row wrap class="mb-2")
      v-flex(xs12 sm6 class="text-xs-center text-sm-right")
        v-btn(large router to="/meetups" class="success") Explore Meetups
      v-flex(xs12 sm6 class="text-xs-center text-sm-left")
        v-btn(large router to="/meetup/new" class="success") Organize Meetup
    v-layout(row wrap class="md-2")
      v-flex(xs12)
        v-carousel
          v-carousel-item(v-for="(item, i) in meetups" v-bind:src="item.imageUrl" key="item.id" @click="onLoadMeetup(item.id)" style="cursor:pointer")
            div(class="title") {{item.title}}

    v-btn(large class="success" @click="onFacebook()") Facebook
</template>

<script>
  import Vue from 'vue'
  export default {
    computed: {
      meetups () {
        return this.$store.getters.featuredMeetups
      }
    },
    methods: {
      onLoadMeetup (id) {
        this.$router.push('/meetups/' + id)
      },
      onFacebook () {
        Vue.axios.get('http://localhost:8000/login', {
          headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Request-Method': '*'
          }
        }).then((response) => {
          window.location.href = response
        })
      }
    }
  }
</script>
<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    padding: 30px;
    font-size: 2em;

  }
</style>
