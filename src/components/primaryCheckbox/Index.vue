<template>
  <div class="primary-checkbox">
    <input
      type="checkbox"
      :id="checkboxId"
      class="primary-checkbox__checkbox"
      :checked="value"
      @change="$emit('input', $event.target.checked)" />
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
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    checkboxId: () => Math.floor(Date.now() * Math.random())
  }
}
</script>

<style lang="scss" scoped>
  @import './scss/style.scss';
</style>
