<template lang="pug">
  v-app
    v-navigation-drawer(:mini-variant="mini" temporary v-model="drawer"  dark class="primary" overflow absolute)
      v-list(class="pa-0")
        v-list-tile(@click.native.stop="mini = !mini" v-if="mini")
          v-list-tile-action
            v-icon(light) chevron_right
        v-list-tile(avatar tag="div")
          v-list-tile-avatar
            img(src="https://randomuser.me/api/portraits/men/85.jpg")
          v-list-tile-content
            v-list-tile-title John Leider
          v-list-tile-action
            v-btn(icon @click.native.stop="mini = !mini")
              v-icon chevron_left
      v-list(class="pt-0" dense)
        v-divider(light)
        v-list-tile(:key="item.title" v-for="item in items")
          v-list-tile-action
            v-icon {{ item.icon }}
          v-list-tile-content
            v-list-tile-title {{ item.title }}
    v-toolbar(fixed dark)
      v-toolbar-title My Project
      v-toolbar-side-icon(@click.native.stop="drawer = !drawer")
      v-spacer
      v-toolbar-items
        v-btn(flat)
          v-icon(left) supervisor_account
          | View Meetups
    main

</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        mini: false,
        items: [
          {title: 'Home', icon: 'dashboard'},
          {title: 'About', icon: 'question_answer'}
        ],
        right: false
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
