import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'http://1.bp.blogspot.com/-wFbpZC3YXwQ/U2AkHNxiNUI/AAAAAAAAKtM/1o4Rn6zB9V0/s1600/357443-svetik.jpg',
        id: 'Meetup in Belarus',
        title: 'Meetup in Belarus',
        location: 'Belarus',
        date: '2017-07-17'
      },
      {
        imageUrl: 'http://www.goturkeytourism.com/assets/hero/xnatural-wonders-turkey.jpg.pagespeed.ic.wISm6hz4qR.jpg',
        id: 'fsdfsdfdsfddew',
        title: 'Another meetup in Turkey',
        location: 'Turkey',
        date: '2017-07-17'
      },
      {
        imageUrl: 'http://travel.home.sndimg.com/content/dam/images/travel/stock/2017/1/9/1/GettyImages-Mustang_79-136757391-cliffs-of-moher.jpg.rend.hgtvcom.966.644.suffix/1491841349897.jpeg',
        id: 'dascbgghjgjsda',
        title: 'Interesting event on Ireland',
        location: 'Ireland',
        date: '2017-07-17'
      },
      {
        imageUrl: 'http://blog.webpixel.co/wp-content/uploads/15318971.jpg',
        id: 'mjhkjkdeae325',
        title: 'Go to Norway',
        location: 'Norway',
        date: '2017-07-17'
      },
      {
        imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/f8/f7/55/f8f7551f82c1fc0fed35dc1f8b59ec48.jpg',
        id: 'fyrysccdvdffdgdf',
        title: 'This is Taiwan',
        location: 'Taiwan',
        date: '2017-07-17'
      }
    ],
    user: {
      id: 'ajaldslfalsk12',
      registeredMeetups: ['aadsfhbkhlk1241']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'kfdlsfjslakl12'
      }
      // Reach out to firebase and store it
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 7)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
