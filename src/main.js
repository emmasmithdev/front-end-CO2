import Vue from 'vue'
import App from './App.vue'
import HighchartsVue from 'highcharts-vue'
import VueMq from 'vue-mq'

Vue.use(HighchartsVue)
Vue.use(require('vue-moment'));

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 1250,
    laptop: Infinity,
  }
})

new Vue({
  template: `
    <.footprint :grid-template-columns="$mq | mq({
      phone: 2,
      tablet: 3,
      laptop: 4
    })">
    </.footprint>
  `,
})
