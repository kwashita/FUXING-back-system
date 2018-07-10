import Vue from 'vue'
import Router from 'vue-router'
import DataOverview from '../components/DataOverview.vue'
// import WelfareEnterprise from '../components/WelfareEnterprise.vue'
import Welfaremanagement from '../components/Welfaremanagement.vue'
import Fuliguanli from '../components/fuliguanli.vue'
import WelfareDetails from '../components/WelfareDetails.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dataOverview',
      name: 'DataOverview',
      component: DataOverview
    },
    {
      path: '/welfaremanagement',
      name: 'Welfaremanagement',
      component: Welfaremanagement
    },
    {
      path: '/fuliguanli',
      name: 'fuliguanli',
      component: Fuliguanli
    },
    {
      path: '/welfareDetails',
      name: 'welfareDetails',
      component: WelfareDetails
    }
  ]
})
