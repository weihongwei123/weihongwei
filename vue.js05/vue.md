# vue.js 01
## 开始 vue.js 前的介绍
```
库：  一些特定需求的集合。 jquery   DOM 封装。
框架：也是属于库的一种，更倾向于提整套的解决方案。
	比如： angularJS   vue.js... 框架

前端 UI 框架  Bootstrap
node.js 框架  Express
移动端框架(js 框架) Angular  vue  React.
```

## 使用vue
```
	npm install vue@2.2.3
	<script src="vue.js"></script>
	<div id="container">
	</div>
	// 实例化 vue对象
	new Vue({
		el:'#container',
		data:{
			username:'jack',
		}
	})
```

## {{}} 使用
```
{{1+2}} // 运算
{{ username }} //变量
{{'jack'}} // 字符串
```

## 指令
```
v-model
v-text   // 文本 不解析 html 标记
	v-text = "'str'"  // 字符串
	v-text = "username"   // 变量
v-html   // 解析 html 标签
	v-html = "'str'"  // 字符串
	v-html = "username"   // 变量
v-bind   // 绑定属性   省略写法  :
v-bind:src  			:src=""
v-bind:title 
v-bind:index   // 自定义属性
v-bind:checked  // 默认选中
v-once:			只读取一次

v-if="变量"
	变量：true  // 显示容器
		  false // 就隐藏容器

		 原理： 是把容器加上 html 的注释 


v-show="变量"
	变量：true  // 显示容器
		  false // 就隐藏容器			
		  原理是通过 display 


v-for(item in data)
	<tr v-for="(item,i) in usernames">
		<td>{{i}}</td>
		<td>{{item.id}}</td>
		<td>{{item.name}}</td>
		<td>{{item.sex}}</td>
		<td>{{item.age}}</td>
	</tr>

```
### 事件指令
```
	@事件名="事件处理程序"
	<button @click="fun()"></button>
	new Vue({
		el: Element,
		methods:{
			fun:function(){
				// 函数处理程序
			}
		}

	})
	
```
### 自定义指令
```
	/* 自定义指令 字体颜色 */
	Vue.directive('color',function(element,bind){
		// console.log(element);
		element.style.color = bind.value;
	})
```
### 过滤器
```
	vue 2.0 版本后就不自带过滤器了。如果想使用过滤器就得自己定义了。
	
	vue 1.0 自带的过滤器
		<li>{{str}}</li>
		<!-- 首字母大写 -->
		<li>{{str|capitalize}}</li>
		<!-- 全部转化成小写 -->
		<li>{{str|lowercase}}</li>
		<!-- 全部转化成小写 -->
		<li>{{logo|lowercase|capitalize}}</li>
		<!-- 数字 -->
		<li>{{12346|currency}}</li>
		<li>{{12346|currency '￥：'}}</li>
		<li>{{12346|currency '^:'}}</li>

```
### 自定义过滤器
```
	<h3>{{date|date}}</h3>
	// 定义过滤器
	Vue.filter('date',function(value){
		// console.log(value);
		// 格式化时间
		var myDate = new Date(value);
		var y = myDate.getFullYear();
		var m = myDate.getMonth();
		var d = myDate.getDate();
		var h = myDate.getHours();
		var i = myDate.getMinutes();
		var s = myDate.getSeconds();
		return y+'/'+m+'/'+d+' '+h+':'+i+':'+s;
	})

```

###  计算属性 、监听
````
computed 计算属性
watch  、监听
````

### class 相关的指令
```
	// 直接写 字符串 
	<div v-bind:class="'bgRed'">教练让TT轮休，TT说轮休更累！</div>
	// 布尔类型的值 
	<div v-bind:class="{blue:false}">教练让TT轮休，TT说轮休更累！</div>
	<div v-bind:class="{blue:true}">教练让TT轮休，TT说轮休更累！</div>
	// 变量	
	<div v-bind:class="{blue:is}">教练让TT轮休，TT说轮休更累！</div>
```

### 购物车 小效果



###  get  post  区别
```
get  
	1. get 通过 url 进行传递参数
	2. get 不安全  post 相对安全 
	3. get 一般用于查询数据， post 数据库进行增加 修改 类的操作。
	4. get 大小有限制 post 的大小可以通过配置文件修改
	5. get 请求的时候 get 可能会有浏览器的缓存。 post 没有。

```

### axios  ajax 模块。
```
	axios.get('test.php').then(function (response) {
		console.log(response);
	}).catch(function (error) {
		console.log(error);
	});	

```


## 组件
```
	组件：html + css + js  组成的一个功能。 
	

```

### 1. 全局组件
```
//             组建名称
Vue.component('my-component',{
	template:"demo"
});

例：
// 全局的组件
Vue.component('my-component',{
	template:'<ul><li><a>首页</a></li><li><a>大陆</a></li><li><a>欧美</a></li><li><a>日韩</a></li><li><a>动漫</a></li><li><a>bt</a></li></ul>',
	// template: '<div>A custom component!</div>'
});

```

### 2. 局部组件
```
例：
	new Vue({
		// 控制绑定容器
		el: '#container1',
		// 定义局部组建
		components:{
			jubu:{
				template:"<h2>局部组件</h2>",
			},
		},
	});

```
### 3. 主键里的数据
```
// 全局的组件
Vue.component('my-component',{
	template:"<h1><span>{{str}}</span>是个好日子, <span>{{str1}}</span>的日子 <h1>",
	data:function(){
		return {
			str:'后天',
			str1:'闷骚',
		}
	}
});

```

### 4.组件模版
```
<!-- 组件模版  -->
<template id="nav">
	<!-- 只能父级标签 -->
	<div id="mynav">
		<ul>
			<li><a href="">首页</a></li>			
			<li><a href="">亚洲</a></li>			
			<li><a href="">欧美</a></li>			
			<li><a href="">无码</a></li>			
			<li><a href="">在线</a></li>			
			<li><a href="">迅雷</a></li>			
			<li><a href="">电驴</a></li>			
		</ul>	
	</div>		
</template>
```

## 路由
```
	//请求的路径  返回不同的操作。		
```
### 例子
#### html
```
<div id="container">
	<router-view></router-view>
	<footer>
		<router-link to="/">首页</router-link>
		<router-link to="/guanyu">关于我们</router-link>
		<router-link to="/jiaru">加入我们</router-link>
		<router-link to="/dashang">打赏我们</router-link>
	</footer>
</div>
```
#### js
```
new Vue({
	// 控制绑定容器
	el: '#container',
	// 定义路由
	router:new VueRouter({
		routes:[
			{path:'/',component:{template:'<h2>首页</h2>'}},
			{path:'/guanyu',component:{template:'<h2>关于我们</h2>'}},
			{path:'/jiaru',component:{template:'<h2>加入我们</h2>'}},
			{path:'/dashang',component:{template:'<h2>打赏我们</h2>'}},
		]
	}),
});
```
