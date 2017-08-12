<template lang="pug">
  v-container
   v-card(class="mt-3 pb-5 pt-5" dark)
     v-layout(row)
       v-flex(xs12 sm6 offset-sm3)
         h4 Create a new Meetup
     v-layout(row)
       v-flex(xs12)
         form(@submit.prevent="onCreateMeetup")
           v-layout(row)
             v-flex(xs12 sm6 offset-sm3)
               v-text-field(name="title" label="Title" id="title" v-model="title" required)
           v-layout(row)
             v-flex(xs12 sm6 offset-sm3)
               v-text-field(name="location" label="Location" id="location" v-model="location" required)
           v-layout(row)
             v-flex(xs12 sm6 offset-sm3)
               v-text-field(name="imageUrl" label="Image Url" id="imageUrl" v-model="imageUrl" required)
           v-layout(row)
             v-flex(xs12 sm6 offset-sm3)
               img(:src="imageUrl" height="50px")
           v-layout(row)
             v-flex(xs12 sm6 offset-sm3)
               v-text-field(name="description" multi-line label="Description" id="description" v-model="description" required)
           v-layout(row)
             v-flex(xs12 sm6 offset-sm3)
               v-btn(:disabled="!formIsValid"  class="primary black--text" type="submit" ) Organize Meetup
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        location: '',
        imageUrl: '',
        description: ''
      }
    },
    computed: {
      formIsValid () {
        return this.title !== '' &&
          this.location !== '' &&
          this.imageUrl !== '' &&
          this.description !== ''
      }
    },
    methods: {
      onCreateMeetup () {
        if (!this.formIsValid) {
          return
        }
        const meetupData = {
          title: this.title,
          location: this.location,
          imageUrl: this.imageUrl,
          description: this.description,
          date: new Date()
        }
        this.$store.dispatch('createMeetup', meetupData)
        this.$router.push('/meetups')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
