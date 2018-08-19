import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import News from '../components/News.vue'
import Notice from '../components/Notice.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', name: 'Home' , component: Home},
        {path: 'news', name: 'News' , component: News},
        {path: 'notice', name: 'Notice' , component: Notice}
    ]
})
