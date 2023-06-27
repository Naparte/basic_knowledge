## Vue

## 1.v-if和v-show的区别？
        
 > 相同点：
 -  v-show 与 v-if 的作用效果是相同的(不含v-else)，都能控制元素在页面是否显示

> 差异
1. 控制手段不同：
    - v-show隐藏则是为该元素添加css--display:none，dom元素依旧还在。
    - v-if显示隐藏是将dom元素整个添加或删除
2. 编译过程不同：
    - v-if切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；
    - v-show只是简单的基于css切换
3. 编译条件不同：
    - v-if是真正的条件渲染，它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。只有渲染条件为假时，并不做操作，直到为真才渲染
    - v-show 由false变为true的时候不会触发组件的生命周期
    - v-if由false变为true的时候，触发组件的beforeCreate、create、beforeMount、mounted钩子，由true变为false的时候触发组件的beforeDestory、destoryed方法
    - 性能消耗：v-if有更高的切换消耗；v-show有更高的初始渲染消耗

    参考资料：https://vue3js.cn/interview/vue/show_if.html#%E4%B8%80%E3%80%81v-show%E4%B8%8Ev-if%E7%9A%84%E5%85%B1%E5%90%8C%E7%82%B9

## 2.如何理解MVVM的？
    是Model-View-ViewModel的缩写。前端开发的架构模式
    M：模型，对应的就是data的数据
    V：视图，用户界面，DOM
    VM：视图模型：Vue的实例对象，连接View和Model的桥梁
    核心是提供对View和ViewModel的双向数据绑定，当数据改变的时候，ViewModel能监听到数据的变化，自动更新视图，当用户操作视图的时候，ViewModel也可以监听到视图的变化，然后通知数据进行改动，这就实现了双向数据绑定
    ViewModel通过双向绑定把View和Model连接起来，他们之间的同步是自动的，不需要认为干涉，所以我们只需要关注业务逻辑即可，不需要操作DOM，同时也不需要关注数据的状态问题，因为她是由MVVM统一管理

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/87a6b39b2c504c1283dc6eb8a48703ac~tplv-k3u1fbpfcp-watermark.image?)

## 3.v-for中的key值的作用是什么？

> 为什么要key

    1. vue中列表循环需要加:key='唯一标识'，唯一标识尽量是id，目的是为了高效地更新虚拟DOM
    2. key主要用于dom diff算法，diff算法为同级比较，比较当前标签上的key还有他当前的标签名，如果key和标签名都一样时只移动，不会重新创建元素和删除元素
    3. 没有key地时候默认使用就地复用策略。如果数据的顺序被改变，vue不是移动DOM元素来匹配数据项的改变，而是简单复用原来位置的每个元素，在进行比较时发现标签一样值不一样时，就会复用之前的位置，将新值直接放到该位置，以此类推，最后多出一个就会把最后一个删除掉。
    4. 尽量不要使用索引值index作key值，一定要用唯一标识的值，如id等。因为若用数组索引index为key，当向数组中指定位置插入一个新元素后，因为这时候会重新更新index索引，对应着后面的虚拟DOM的key值全部更新了，这个时候还是会做不必要的更新，就像没有加key一样，因此index虽然能够解决key不冲突的问题，但是并不能解决复用的情况。如果是静态数据，用索引号index做key值是没有问题的。

    key属性是DOM元素的唯一标识
    作用：
        1.提高虚拟DOM的更新
        2.若不设置key，可能会触发一些bug
        3.为了触发过度效果

链接：https://juejin.cn/post/7069004247651581989


## 4.说一下你对vue生命周期的理解。
    组件从创建到销毁的过程就是它的生命周期
    创建
        beforeCreat
            在这个阶段属性和方法都不能使用
        created
            这里时实例创建完成之后，在这里完成了数据监测，可以使用数据，修改数据，不会触发updated，也不会更新视图
    挂载
        beforeMount
            完成了模板的编译，虚拟DOM也完成创建，即将渲染，修改数据，不会触发updated
        Mounted
            把编译好的模板挂载到页面，这里可以发送异步请求也可以访问DOM节点
    更新
        beforeUpdate
            组件数据更新之前使用，数据是新的，页面上的数据时旧的，组件即将更新，准备渲染，可以改数据
        updated
            render重新做了渲染，这时数据和页面都是新的，避免在此更新数据
    销毁
        beforeDestroy
            实例销毁前，在这里实例还可以用，可以清楚定时器等等
        destroyed
            组件已经被销毁了，全部都销毁
    使用了keep-alive时多出两个周期：
        activited
            组件激活时
        deactivited
            组件被销毁时

## 5.在created和mounted去请求数据，有什么区别？
    created：在渲染前调用，通常先初始化属性，然后做渲染
    mounted：在模板渲染完成后，一般都是初始化页面后，在对元素节点进行操作
            在这里请求数据可能会出现闪屏的问题，created里不会
    一般用created比较多
    请求的数据对DOM有影响，那么使用created
    如果请求的数据对DOM无关，可以放在mounted

## 6.vue中的修饰符有哪些？
    1.事件修饰符
        .stop       组织冒泡
        .prevent    组织默认行为
        .capture    内部元素触发的事件先在次处理
        .self       只有在event.target是当前元素时触发
        .once       事件只会触发一次
        .passive    立即触发默认行为
        .native     把当前元素作为原生标签看待
    2.按键修饰符
        .keyup      键盘抬起
        .keydown    键盘按下
    3.系统修饰符
        .ctrl
        .alt
        .meta
    4.鼠标修饰符
        .left       鼠标左键
        .right      鼠标右键
        .middle     鼠标中键
    5.表单修饰符
        .lazy       等输入完之后再显示
        .trim       删除内容前后的空格
        .number     输入是数字或转为数字
## 7.elementui是怎么做表单验证的？
    1.在表单中加rules属性，然后再data里写校验规则
    2.内部添加规则
    3.自定义函数校验

链接： https://juejin.cn/post/6975495834360086535


## 8.vue如何进行组件通信？

1. `props / $emit` （父组件通过props的方式向子组件传递数据，而通过$emit 子组件可以向父组件通信）
        
2. `v-model 指令` （用来在表单控件或者组件上创建双向绑定的，他的本质是 v-bind 和 v-on 的语法糖，在一个组件上使用 v-model，默认会为组件绑定名为 value 的 prop 和名为 input 的事件）

3. `.sync 修饰符`(.sync 修饰符 和 v-model 很相似，也是语法糖， v-bind:title.sync 也就是 等效于 v-bind:title="doc.title" v-on:update:title="doc.title = $event"
)

4. `parent/children` (通过$parent和$children就可以访问组件的实例，拿到实例代表什么？代表可以访问此组件的所有方法和data)
 
5. `provide / inject` (vue2.2.0新增的api, 简单来说就是父组件中通过provide来提供变量, 然后再子组件中通过inject来注入变量)

6. `ref / $refs` (ref：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例，可以通过实例直接调用组件的方法或访问数据)

7. `eventBus` (其实原理就是 事件订阅发布，eventBus 又称为事件总线，在vue中可以使用它来作为沟通桥梁的概念, 就像是所有组件共用相同的事件中心，可以向该中心注册发送事件或接收事件， 所以组件都可以通知其他组件)

8. `localStorage / sessionStorage`

9. Vuex

10. 通过 `$root 访问根实例` (通过 $root，任何组件都可以获取当前组件树的根 Vue 实例，通过维护根实例上的 data，就可以实现组件间的数据共享)

11. `$attrs与 $listeners`

```javascript
// 常见使用场景可以分为三类:

// 1. 父子组件通信: props、$parent / $children、 provide / inject 、 ref \ $refs 、 $attrs / $listeners
// 2. 兄弟组件通信: eventBus 、 vuex、 自己实现简单的 Store 模式
// 3. 跨级通信: eventBus、 Vuex、 自己实现简单的 Store 模式、 provide / inject 、 $attrs / $listeners

```

链接：https://juejin.cn/post/7038457201052090376


## 9.keep-alive是什么？怎么使用？
    Vue的一个内置组件，包裹组件的时候，会缓存不活跃的组件实例，并不是销毁他们
    作用：把组件切换的状态保存在内存里，防止重复渲染DOM节点，减少加载时间和性能消耗，提高用户体验

## 10.axios是怎么做封装的？
    针对axios做适合业务发展的封装，很多时候架构师做公共机制都是为了迎合自身项目需要


## 11.vue路由时怎么传参的？
    params传参
        this.$router.push({name:'index',params:{id:item.id}})
        this.$route.params.id
    路由属性传参
        this.$router.push({name:'/index/${item.id}'})
        路由配置 { path:'/index:id' }
    query传参（可以解决页面刷新参数丢失的问题）
        this.$router.push({
            name:'index',
            query:{id:item.id}
        })
链接：https://juejin.cn/post/6999913464361648159 

## 12.vue路由的hash模式和history模式有什么区别？

1. hash的路由地址上有#号，history模式没有
2. 在做回车刷新的时候，hash模式会加载对应页面，history会报错404
3. hash模式支持低版本浏览器，history不支持，因为是H5新增的API
4. hash不会重新加载页面，单页面应用必备
5. history有历史记录，H5新增了pushState和replaceState()去修改历史记录，并不会立刻发送请求
6. history需要后台配置

链接：https://juejin.cn/post/7248599585735508005


## 13.路由拦截是怎么实现的？
        路由拦截 axios拦截
        需要在路由配置中添加一个字段，它是用于判断路由是否需要拦截
        {
            name:'index',
            path:'/index',
            component:Index,
            meta:{
                requirtAuth:true
            }
        }
        router.beforeEach((to,from,next) => {
            if(to.meta.requirtAuth){
                if( store.satte.token ){
                    next()
                }else{
                    
                }
            }
        })


## 14.说一下vue的动态路由。
    要在路由配置里设置meat属性，扩展权限相关的字段，在路由导航守卫里通过判断这个权限标识，实现路由的动态增加和跳转
    根据用户登录的账号，返回用户角色
    前端再根据角色，跟路由表的meta.role进行匹配
    把匹配搭配的路由形成可访问的路由

## 15.如何解决刷新后二次加载路由？
1.window.location.reload()
2.matcher
    const router = createRouter()
    export function resetRouter(){
        const newRouter = creatRouter()
        router.matcher = newRouter.matcher
    }
    
## 16.vuex刷新数据会丢失吗？怎么解决？
vuex肯定会重新获取数据，页面也会丢失数据
1.把数据直接保存在浏览器缓存里（cookie  localstorage  sessionstorage）
2.页面刷新的时候，再次请求数据，达到可以动态更新的方法
    监听浏览器的刷新书简，在刷新前把数据保存到sessionstorage里，刷新后请求数据，请求到了用vuex，如果没有那就用sessionstorage里的数据
## 17.computed和watch的区别？
1.computed是计算属性，watch是监听，监听的是data中数据的变化
2.computed是支持缓存，依赖的属性值发生变化，计算属性才会重新计算，否则用缓存；watch不支持缓存
3.computed不支持异步，watch是可以异步操作
4.computed是第一次加载就监听，watch是不监听
5.computed函数中必须有return  watch不用
## 18.vuex在什么场景会去使用？属性有哪些？
    state       存储变量
    getters     state的计算属性
    mutations   提交更新数据的方法
    actions     和mutations差不多，他是提交mutations来修改数据，可以包括异步操作
    modules     模块化vuex
    使用场景：
        用户的个人信息、购物车模块、订单模块
## 19.vue的双向数据绑定原理是什么？
    通过数据劫持和发布订阅者模式来实现，同时利用Object.defineProperty()劫持各个属性的setter和getter，
    在数据发生改变的时候发布消息给订阅者，触发对应的监听回调渲染视图，也就是说数据和视图时同步的，数据发生改变，视图跟着发生改变，视图改变，数据也会发生改变。
    第一步：需要observer的数据对象进行递归遍历，包括子属性对象的属性，都加上setter和getter
    第二步：compile模板解析指令，把模板中的变量替换成数据，然后初始化渲染视图，同时把每个指令对应的节点绑定上更新函数，添加订阅者，如果数据变化，收到通知，更新视图
    第三步：Watcher订阅者是Observer和Compile之间的通信桥梁，作用：
            1.在自身实例化的时候忘订阅器内添加自己
            2.自身要有一个update()方法
            3.等待属性变动时，调用自身的update方法，触发compile这种的回调
    第四步：MVVM作为数据绑定的入口，整合了observer、compile和watcher三者，通过observer来监听自己的数据变化，通过compile解析模板指令，最后利用watcher把observer和compile联系起来，最终达到数据更新视图更新，视图更新数据更新的效果
## 20.了解diff算法和虚拟DOM吗？
    虚拟DOM，描述元素和元素之间的关系，创建一个JS对象
    如果组件内有响应的数据，数据发生改变的时候，render函数会生成一个新的虚拟DOM，这个新的虚拟DOM会和旧的虚拟DOM进行比对，找到需要修改的虚拟DOM内容，然后去对应的真实DOM中修改
    diff算法就是虚拟DOM的比对时用的，返回一个patch对象，这个对象的作用就是存储两个节点不同的地方，最后用patch里记录的信息进行更新真实DOM
    步骤：
        1.JS对象表示真实的DOM结构，要生成一个虚拟DOM，再用虚拟DOM构建一个真实DOM树，渲染到页面
        2.状态改变生成新的虚拟DOM，跟就得虚拟DOM进行比对，这个比对的过程就是DIFF算法，利用patch记录差异
        3.把记录的差异用在第一个虚拟DOM生成的真实DOM上，视图就更新了。
## 21.vue和jquery的区别是什么？
    1.原理不同
        vue就是数据绑定；jq是先获取dom再处理
    2.着重点不同
        vue是数据驱动，jq是着重于页面
    3.操作不同
    4.未来发展不同
## 22.vuex的响应式处理。
    vuex是vue的状态管理工具
    vue中可以直接触发methods中的方法，vuex是不可以的。未来处理异步，当触发事件的时候，会通过dispatch来访问actions中的方法，actions中的commit会触发mutations中的方法从而修改state里的值，通过getter把数据更新到视图
    Vue.use(vuex)，调用install方法，通过applyMixin(vue)在任意组件内执行this.$store就可以访问到store对象。
    vuex的state是响应式的，借助的就是vue的data，把state存到vue实例组件的data中
## 23.vue中遍历全局的方法有哪些？
        1.普通遍历，对象.forEach()
            arr.forEach(function(item,index,arr){
                console.log(item,index)
            })
        2.对元素统一操作  对象.map()
            var newarr = arr.map(function(item){
                return item+1
            })
        3.查找符合条件的元素 对象.filter()
            arr.filter(function(item){
                if(item > 2){
                    return false
                }else{
                    return true
                }
            })
        4.查询符合条件的元素，返回索引 对象.findindex()
            arr.finindex(function(item){
                if(item>1){
                    return true
                }else{
                    return false
                }
            })
        对象.evening()  遇到不符合的对象会停止
        对象.some()  找到符合条件的元素就停止
## 24.如何搭建脚手架？
        下载：node  cnpm  webpack vue-cli
        创建项目：
            1.找到对应的文件，然后利用node指令创建（cmd）
            2.vue init webpack xxxx
            3.回车项目描述
            4.作者回车
            5.选择vue build
            6.回车
            7.输入n
            8.不按照yarn
            9.输入npm run dev
## 25.如何封装一个组件？
        1.使用Vue.extend()创建一个组件
        2.使用Vue.components()方法注册组件
        3.如果子组件需要数据，可以在props中接收定义
        4.子组件修改好数据，要把数据传递给父组件，可以用emit()方法
        原则：
            把功能拆开
            尽量让组件原子化，一个组件做一件事情
            容器组件管数据，展示组件管视图
## 26.封装一个可复用的组件，需要满足什么条件？
        1.低耦合，组件之间的依赖越小越好
        2.最好从父级传入信息，不要在公共组件中请求数据
        3.传入的数据要进行校验
        4.处理事件的方法写在父组件中
## 27.vue的过滤器怎么使用？
    vue的特性，用来对文本进行格式化处理
    使用它的两个地方，一个是插值表达式，一个是v-bind
    分类：
        1.全局过滤器
            Vue.filter('add',function(v){
                return v < 10 ? '0' + v : v
            })
            <div>{{33 | add}}</div>
        2.本地过滤器
            和methods同级
            filter:{
                add:function(v){
                    return v < 10 ? '0' + v : v
                }
            }
## 28.vue中如何做强制刷新？
        1.localtion.reload()
        2.this.$router.go(0)
        3.provide和inject
29.vue3和vue2有哪些区别？
        1.双向数据绑定的原理不同
        2.是否支持碎片
        3.API不同
        4.定义数据变量方法不同
        5.生命周期的不同
        6.传值不同
        7.指令和插槽不同
        8.main.js不同
30.vue的性能优化怎么做？
        1.编码优化
            不要把所有数据都放在data中
            v-for时给每个元素绑定事件用事件代理
            keep-alive缓存组件
            尽可能拆分组件，提高复用性、维护性
            key值要保证唯一
            合理使用路由懒加载，异步组件
            数据持久化存储的使用尽量用防抖、节流优化
        2.加载优化
            按需加载
            内容懒加载
            图片懒加载
        3.用户体验
            骨架屏
        4.SEO优化
            预渲染
            服务端渲染ssr
        5.打包优化
            CDN形式加载第三方模块
            多线程打包
            抽离公共文件
        6.缓存和压缩
            客户端缓存、服务端缓存
            服务端Gzip压缩
31.首屏优化该如何去做？
        1.使用路由懒加载
        2.非首屏组件使用异步组件
        3.首屏不中要的组件延迟加载
        4.静态资源放在CDN上
        5.减少首屏上JS、CSS等资源文件的大小
        6.使用服务端渲染
        7.简历减少DOM的数量和层级
        8.使用精灵图请求
        9.做一些loading
        10.开启Gzip压缩
        11.图片懒加载
32.vue3的性能为什么比vue2好？
        1.diff算法的优化
        2.静态提升
        3.事件侦听缓存
33.vue3为什么使用proxy？
        1.proxy可以代理整个对象，defineproperty只代理对象上的某个属性
        2.proxy对代理对象的监听更加丰富
        3.proxy代理对象会生成新的对象，不会修改被代理对象本身
        4.proxy补兼容ie浏览器
    34.说一下你对组件的理解。
        可以重复使用的vue实例，独一无二的组件名称
        可以抽离单独的公共模块
        提高代码的复用率
35.你是如何规划项目文件的？
        public
            图标、index.html、img
        src
            api
            assets
            components
                按分类再次划分子目录
            plugins
            router
            static
            styles
            utils
            views
        App.vue
        main.js
        package.json
        vue.config.js
36.是否使用过nuxt.js？
        是基于vue的应用框架，关注的是渲染，可以开发服务端渲染应用的配置
        SSR：服务端渲染
            好处：
                SSR生成的是有内容的HTML页面，有利于搜索引擎的搜索
                优化了首屏加载时间
        SEO：优化搜索引擎
        SPA的应用不利于搜索引擎SEO的操作
37.SEO如何优化？
        1.SSR
        2.预渲染 prerender-spa-plugin