<template>
  <div class="primary-checkbox">
    <input type="checkbox" :id="checkboxId" class="primary-checkbox__checkbox" />
    <label
      v-if="label"
      :for="checkboxId"
      class="primary-checkbox__label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'primary-checkbox',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    checkboxId: () => Math.floor(Date.now() * Math.random())
  }
}
</script>

<style lang="scss" scoped>
  @import './Style.scss';
</style>
