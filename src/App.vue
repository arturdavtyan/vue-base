<template>
  <div id="app" v-cloak>
    <router-view />
  </div>
</template>

<script>
import { debounce } from '@/utils/'

export default {
  data () {
    return {
      debouncedChangeWindowSize: debounce(this.changeWindowSize, 120)
    }
  },
  created () {
    this.changeWindowSize()
    window.addEventListener('resize', this.debouncedChangeWindowSize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.debouncedChangeWindowSize)
  },
  methods: {
    changeWindowSize () {
      this.$store.commit('General/WindowWidth', window.innerWidth)
    }
  }
}
</script>
