<template>
  <div id="app" v-cloak>
    <router-view />
  </div>
</template>

<script>
export default {
  created () {
    this.changeWindowSize()
    window.addEventListener('resize', this.changeWindowSize)
  },
  beforeMount () {
    document.querySelector('#loading-wrapper').style.display = 'none'
  },
  destroyed () {
    window.removeEventListener('resize', this.changeWindowSize)
  },
  methods: {
    changeWindowSize () {
      this.$store.commit('General/WindowWidth', window.innerWidth)
    }
  }
}
</script>
