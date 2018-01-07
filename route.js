/**
 * Created by 我 on 2017/12/4.
 */
import Vue from 'vue'     //import导入  Vue(自己起的名) from 从  vue
import Vuerouter from 'vue-router'  //引进路由
//使用vuerouter
Vue.use(Vuerouter);
//console.log(Vuerouter);
//创建局部组件
const Index={
  template:`<div>
            <h2>这是首页</h2>
            <router-view></router-view>
      </div>`,
  //监听路由变化  to是去的路径  from是来的路径
  watch:{
    '$route'(to,from){
      console.log(arguments);
      console.log(to);
    }
  },
  /*beforeRouteUpdate(to,from,next){
    console.log(arguments);
    console.log(next);
  }*/
  beforeRouteUpdate (to, from, next) {
    console.log(arguments);
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    next()
  },
};
const New={
  template:`<div>
            <h2>这是新闻</h2>
           <router-view></router-view>
  </div>`
};
const Zixun={
  template:`<div>
            <h2>这是资讯</h2>
           <router-view></router-view>
  </div>`,
  //在调用时候没有访问到实例，但可以通过next对其访问
   beforeRouteEnter (to, from, next) {
   console.log(arguments);
   // 在渲染该组件的对应路由被 confirm 前调用
   // 不！能！获取组件实例 `this`
   // 因为当守卫执行前，组件实例还没被创建
     next(vm=>{
       console.log(vm);
     })
   },

   beforeRouteLeave (to, from, next) {
   console.log(arguments);
   // 导航离开该组件的对应路由时调用
   // 可以访问组件实例 `this`
     next()
   }
};
const Hello={
  template:`<h2>这是小首页</h2>`

};
const Xnew={
  template:`<h2>这是小新闻</h2>`
};
//实例路由
const router=new Vuerouter({
  mode:"history",       //mode模式  history  h5里面的方法  hash
  base:__dirname,      // base 文件路径 相对路径    filename 绝对路径
  routes:[             //路由配置
    {path:"/index",/*redirect:"/new",*/alias: '/b', component:Index,   //redirect为重定向命名
      //alias为别名   『重定向』的意思是，当用户访问 /a时，URL 将会被替换成 /b，然后匹配路由为 /b，那么『别名』又是什么呢？
     ///a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样。
      children:[
        //动态路由路径以冒号开头
        {path:"/index/hello/:id",component:Hello},
        {path:"/index/hello/:id",component:Hello}
      ]
     },   //关联路由
    {path:"/new",component:New,name:'new',
      children:[          //二级路由
        {path:"/new/xnew",component:Xnew },
        ]
      },
    {path:"/zixun",component:Zixun},

  ]
});
//路由钩子
/*router.beforeEach((to, from, next) => {     //全局的前置守卫
  console.log(arguments);
  //sessionStorage.setItem('user','')
  //sessionStorage.getItem('user')
  next()
});*/
new Vue({
  el:"#app",
  router,     //开启路由
  template:
    `
  <div>
      <ul>
         <li><router-link to="/index">这是首页</router-link>
              <ol>
                <li><router-link to="/index/hello/123">首页1</router-link></li>
                <li><router-link to="/index/hello/234">首页2</router-link></li>
              </ol></li>
         <li><router-link to="/new">这是新闻</router-link>
             <ol>  <!-- 二级路由的内容-->
             <li><router-link to="/new/xnew">这是小新闻</router-link></li>
             </ol>
         </li>
         <li><router-link to="/zixun">这是资讯</router-link></li>
         <router-view></router-view>
         <ul>{{ $route.params.id }}</ul>
      </ul>

  </div>
  `
});
