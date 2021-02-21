import Vue from 'vue'
import { ValidationProvider, configure } from 'vee-validate/dist/vee-validate.full.esm'

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
    dirty: ['is-dirty', 'is-dirty']
  }
})

Vue.component('ValidationProvider', ValidationProvider)
