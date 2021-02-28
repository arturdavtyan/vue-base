<template>
  <div class="w-full">
    <div class="container">
      <h1 class="short-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque ipsa consequuntur fugit accusantium optio veniam provident alias commodi itaque facilis rerum deleniti a inventore aspernatur, quae natus, illum beatae sunt tenetur ad aperiam officia quo quibusdam. Sunt illo expedita sequi molestias assumenda libero nesciunt, odit alias deleniti provident. Corrupti, impedit?</h1>
      <h1 class="short-text h order-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque ipsa consequuntur fugit accusantium optio veniam provident alias commodi itaque facilis rerum deleniti a inventore aspernatur, quae natus, illum beatae sunt tenetur ad aperiam officia quo quibusdam. Sunt illo expedita sequi molestias assumenda libero nesciunt, odit alias deleniti provident. Corrupti, impedit?</h1>

      <validation-provider tag="div" class="dd" name="Name" rules="required|min:4" v-slot="{ errors, classes }">
        <input type="text" v-model="t" class="f" :class="classes">
        <span>{{ errors }}</span>
      </validation-provider>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem labore eligendi, possimus minima suscipit aut, inventore incidunt, amet nisi provident minus quidem odio. Incidunt, quisquam provident voluptates qui labore eos.</p>

      <!-- <icon style="width: 160px" /> -->
      <img style="width: 160px" :src="icon" alt="">
      <p :style="{ color: check1 ? '#ea7123' : '#000', backgroundColor: check2 ? '#7af11377' : '#fff' }">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quod eos recusandae eaque optio iure nulla odio? Autem quod maxime recusandae illo mollitia, repellendus eos doloribus atque alias voluptatem sapiente impedit adipisci consequatur eligendi quo? Enim voluptatem officia eius totam!</p>
      <router-link :to="{ name: 'login' }">To</router-link>
      <router-view />
      <br>
      <primary-checkbox label="Are you there ?" v-model="check1" /><br>
      <primary-checkbox v-model="check2" />

      <div class="list-container">
        <ul>
          <li class="list-item">Title 1</li>
          <li class="list-item">Title 2</li>
          <li class="list-item">Title 3</li>
          <li class="list-item">Title 4</li>
          <li class="list-item">Title 5</li>
          <li class="list-item">Title 6</li>
          <li class="list-item">Title 7</li>
        </ul>
      </div>
    </div>
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
  computed: {
    icon: () => require('@/assets/svgs/icon.svg')
  },
  data () {
    return {
      t: '',
      check1: false,
      check2: true
    }
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    // color: $text-primary;
    // font-size: calc(20px + (50 - 20) * ((100vw - 320px) / (1180 - 320)));
    @include adaptive-value(font-size, 42, 20)
  }
  .h {
    color: $text-secondary;
    font-weight: 300;
  }
  .f {
    border: 1px solid #3465e6;
    padding: 4px 10px;
  }

  .list-container {
    padding: 50px 100px;

    ul {
      display: flex;
      flex-wrap: wrap;
      border: 3px solid #777;
      overflow-x: auto;

      .list-item {
        flex: 1 1 33.33333%;
        min-width: 160px;
        font-size: 24px;
        background-color: #9ae265;
        border: 1px solid red;
        // max-width: 33.333%;

        &:nth-child(7) {
          // max-width: 33.333%;
          flex-grow: 0;
          // flex-shrink: 1;
          // background-color: darkgreen;
        }
      }
    }
  }
</style>
