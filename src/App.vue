<template lang="pug">
  v-app
    v-navigation-drawer(:mini-variant="mini"  v-model="drawer"  dark  overflow absolute)
      v-list(class="pa-0")
        v-list-tile(@click.stop="mini = !mini" v-if="mini")
          v-list-tile-action
            v-icon(light) chevron_right
        v-list-tile(avatar tag="div")
          v-list-tile-avatar
            img(src="https://randomuser.me/api/portraits/men/85.jpg")
          v-list-tile-content
            v-list-tile-title John Leider
          v-list-tile-action
            v-btn(icon @click.stop="mini = !mini")
              v-icon chevron_left
      v-list(class="pt-0" dense)
        v-divider(light)
        v-list-tile(:key="item.title" :to="item.link"  v-for="item in items")
          v-list-tile-action
            v-icon {{ item.icon }}
          v-list-tile-content
            v-list-tile-title {{ item.title }}
    v-toolbar(dark)
      v-toolbar-title
        router-link(to="/" tag="span" style="cursor: pointer") My Meetups
      v-toolbar-side-icon(@click.native.stop="drawer = !drawer")
    main
      router-view

</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        mini: false,
        items: [
          {title: 'View Meetups', icon: 'supervisor_account', link: '/meetups'},
          {title: 'Organize Meetup', icon: 'room', link: '/meetup/new'},
          {title: 'Profile', icon: 'person', link: '/profile'},
          {title: 'Sign up', icon: 'face', link: '/signup'},
          {title: 'Sign in', icon: 'lock_open', link: '/signin'}
        ],
        right: false
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
