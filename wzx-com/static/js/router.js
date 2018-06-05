import Vue from 'vue';
import VueRouter from 'vue-router';
import Show from '../../src/routerApp/show.vue';
import Content from '../../src/routerApp/content.vue'
//import Technology from '../../src/routerApp/children/technology.vue'
Vue.use(VueRouter);
const routes = [
    {  
        path:'/',  
        redirect:'/show'  
    },
    {
        path: '/show', 
        name:'Show',
        component: Show 
    },
    {  
        path:'/content',  
        redirect:'/content/technology/1' 
    },
    {
        path: '/content', 
        name:'Content',
        component: Content,
        children:[
            {
                path: '/content/technology', 
                redirect:'/content/technology/1'
            },
            {
                path: '/content/project', 
                redirect:'/content/project/1'
            },
            {
                path: '/content/active', 
                redirect:'/content/active/1'
            },
            {
                path: '/content/about', 
                redirect:'/content/about/1'
            },
            {
                path: '/content/technology/:id', 
                name:'Technology',
                component: res => require(['../../src/routerApp/children/technology.vue'],res)
            },
            {
                path: '/content/project/:id', 
                name:'Project',
                component: res => require(['../../src/routerApp/children/project.vue'],res)
            },
            {
                path: '/content/active/:id', 
                name:'Active',
                component: res => require(['../../src/routerApp/children/active.vue'],res)
            },
            {
                path: '/content/about/:id', 
                name:'About',
                component: res => require(['../../src/routerApp/children/about.vue'],res)
            }
        ]
    }
];
const router = new VueRouter({
    routes : routes,
    mode:'history',
    base:'/dist/'
})

export default router;