var Vuex = require('vuex')

vuexInstaller = Vuex.install
Vuex.install = function (Vue) {
  vuexInstaller.apply(Vuex, arguments)
  Object.defineProperty(Vue.prototype, 'store', {
    get: function () {
      return this.$store
    },
  })
}

module.exports = Vuex
