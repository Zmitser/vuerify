<template lang="pug">
  v-container
    v-layout(:key="meetup.id"  v-for="meetup in meetups" class="mb-3" row wrap)
      v-flex(s12 sm10 offset-sm-1 offset-md-2)
        v-card(class="secondary"  )
          v-container(fluid)
            v-layout(row)
              v-flex(xs5 sm4 md3)
                v-card-media(v-bind:src="meetup.imageUrl" height="150px")
              v-flex(xs7 sm8 md9)
                v-card-title(primary-title)
                  div
                    h5(class="white--text mb-0") {{meetup.title}}
                    div {{meetup.date}}
                v-card-actions
                  v-btn(flat :to="'/meetups/' + meetup.id")
                    v-icon(left light) arrow_forward
                    |View Meetup

</template>

<script>
  export default {
    computed: {
      meetups () {
        return this.$store.getters.featuredMeetups
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
