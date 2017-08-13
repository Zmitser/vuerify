<template lang="pug">
  v-container
    v-layout(wrap row)
      v-flex(xs12)
        v-card
          v-card-title
            h6(class="black--text") {{meetup.title}}
          v-card-media(:src="meetup.imageUrl" height="300px")
          v-card-text
            div(class="info--text")  {{meetup.date | date}} - {{meetup.location}}
            div Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            |Adipisci assumenda at deserunt dolorum eius esse eum, expedita hic illo ipsum magni, nobis,
            |odio odit quaerat quibusdam quis rem veritatis voluptas!
          v-card-actions
            v-spacer
            v-btn(class="black white--text") Register

</template>

<script>
  export default {
    props: ['id'],
    computed: {
      meetup () {
        return this.$store.getters.loadedMeetup(this.id)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
