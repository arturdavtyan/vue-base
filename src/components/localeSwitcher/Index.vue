<template>
  <ul>
    <li
      v-for="(locale, i) in locales"
      :key="`locale-${i}`"
      @click="switchLocale(locale)">{{ $t(`languages.${locale}`) }}</li>
  </ul>
</template>

<script>
import { translation } from '@/i18n'

export default {
  name: 'locale-switcher',
  computed: {
    locales: () => translation.supportedLocales
  },
  methods: {
    async switchLocale (locale) {
      if (translation.currentLocale !== locale) {
        await translation.changeLocale(locale)
      }
    }
  }
}
</script>
