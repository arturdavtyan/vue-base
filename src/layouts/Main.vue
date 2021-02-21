<template>
  <div>
    <h1 class="short-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque ipsa consequuntur fugit accusantium optio veniam provident alias commodi itaque facilis rerum deleniti a inventore aspernatur, quae natus, illum beatae sunt tenetur ad aperiam officia quo quibusdam. Sunt illo expedita sequi molestias assumenda libero nesciunt, odit alias deleniti provident. Corrupti, impedit?</h1>
    <h1 class="short-text h order-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque ipsa consequuntur fugit accusantium optio veniam provident alias commodi itaque facilis rerum deleniti a inventore aspernatur, quae natus, illum beatae sunt tenetur ad aperiam officia quo quibusdam. Sunt illo expedita sequi molestias assumenda libero nesciunt, odit alias deleniti provident. Corrupti, impedit?</h1>

    <validation-provider tag="div" class="dd" name="Name" rules="required|min:4" v-slot="{ errors, classes }">
      <input type="text" v-model="t" class="f" :class="classes">
      <span>{{ errors }}</span>
    </validation-provider>

    <icon style="width: 160px" />
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quod eos recusandae eaque optio iure nulla odio? Autem quod maxime recusandae illo mollitia, repellendus eos doloribus atque alias voluptatem sapiente impedit adipisci consequatur eligendi quo? Enim voluptatem officia eius totam!</p>
    <router-link :to="{ name: 'login' }">To</router-link>
    <router-view />
  </div>
</template>

<script>
// import { capitalize } from '@/utils'
// console.log(capitalize('sdf TTUDghgDG ghggfjdHGH'))
// import { extend } from 'vee-validate'
// import { required, email } from 'vee-validate/dist/rules'

// extend('required', {
//   validate (value) {
//     return {
//       required: true,
//       valid: ['', null, undefined].indexOf(value.trim()) === -1
//     }
//   },
//   computesRequired: true,
//   message: (field, p) => `The ${field} field is required`
// })
// extend('required', {
//   ...required,
//   message: field => `The ${field} field is required`
// })
// extend('email', {
//   ...email,
//   message: () => 'email'
// })
// extend('min', {
//   validate: (value, { min }) => value.trim().length > min,
//   params: ['min'],
//   message: (field, p) => `The ${field} field must have minimum ${p.min} characters`
// })

export default {
  components: {
    icon: () => import('@/assets/svgs/icon.svg')
  },
  // computed: {
  //   icon () { return icon }
  // },
  data () {
    return {
      t: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    color: $text-primary;
  }
  .h {
    color: $text-secondary;
    font-weight: 300;
  }
  .f {
    border: 1px solid #3465e6;
    padding: 4px 10px;
  }
</style>
