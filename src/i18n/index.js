import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './locales/en.json'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: { en },
  dateTimeFormats: {
    en: {
      short: {
        year: 'numeric',
        month: '2-digit',
        day: 'numeric'
      },
      long: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
      }
    },
    ru: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      },
      long: {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
      }
    },
    am: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      },
      long: {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric'
      }
    }
  },
  numberFormats: {
    en: {
      currency: {
        style: 'currency',
        currency: 'USD'
      }
    },
    ru: {
      currency: {
        style: 'currency',
        currency: 'RUB'
      }
    },
    am: {
      currency: {
        style: 'currency',
        currency: 'AMD',
        currencyDisplay: 'symbol'
      }
    }
  }
})

const translation = {
  get defaultLocale () {
    return process.env.VUE_APP_I18N_LOCALE
  },
  get supportedLocales () {
    return process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
  },
  get currentLocale () {
    return i18n.locale
  },
  set currentLocale (locale) {
    i18n.locale = locale
  },

  isLocaleSupported (locale) {
    return this.supportedLocales.includes(locale)
  },
  loadLocaleFile (locale) {
    return import(`./locales/${locale}.json`)
  },
  setI18nLocaleInServices (locale) {
    this.currentLocale = locale
    localStorage.setItem('lang', locale)
    // axios.defaults.headers.common['Accept-Language'] = locale
    // document.querySelector('html').setAttribute('lang', locale)
    return locale
  },
  changeLocale (locale) {
    if (!this.isLocaleSupported(locale)) {
      localStorage.removeItem('lang')
      return Promise.reject(new Error('Locale not supported'))
    }
    if (this.currentLocale === locale) return Promise.resolve(locale)

    return this.loadLocaleFile(locale).then(msgs => {
      i18n.setLocaleMessage(locale, msgs.default || msgs)
      return this.setI18nLocaleInServices(locale)
    })
  }
}

const lang = localStorage.getItem('lang')
if (lang && lang !== translation.defaultLocale) translation.changeLocale(lang)

export { i18n, translation }
