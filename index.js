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

Vuex.create = function (state, store) {
  store.state = state
  return store
}

module.exports = Vuex
