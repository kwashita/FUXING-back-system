import Vue from 'vue'
import Router from 'vue-router'
import sysData from '../views/sysData.vue'
import adminManage from '../views/adminManage.vue'
import detailsDefault from '../views/detailsDefault.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sysData',
      name: 'sysData',
      component: sysData
    },
    {
      path: '/adminManage',
      name: 'adminManage',
      component: adminManage
    },
    {
      path: '/detailsDefault',
      name: 'detailsDefault',
      component: detailsDefault
    }
  ]
})
