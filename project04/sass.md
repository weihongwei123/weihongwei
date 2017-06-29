# sass

## koala  编译 sass 字符集问题
```
找到安装目录
 C:\Program Files\Koala\rubygems\gems\sass-3.4.9\bin
 下面的 sass  这个文件
 在 所有 require 后面 加入这一行代码：
 Encoding.default_external = Encoding.find('utf-8') 
```

## 变量
```
	// 全局变量
	$color:red;
	div{
		// 局部变量
		$width:400px;
		color:$color;
		width:$width;
	}

```
## 运算
```
	div{
		width: 200px+300px*2;
	}
```

## 嵌套
```
	div{
		width: 100px;
		height: 200px;
		ul{
			list-style: none;
			li{
				a{color:red;}
				// & 自己  li
				&:hover{background:red;}	

				&::after{
					color:red;
					content:''
				}	
			}
		}
	}
```

## 混合
```
	// 混合
	@mixin a(){
		width: 200px;		
		height:200px;
	}

	div{
		color:red;
		@include a();
	}

	p{
		@include a();
	}


	// 带参数混合
	@mixin a($w){
		width: $w;		
		height:200px;
	}

	div{
		color:red;
		@include a(200px);
	}

	p{
		@include a(400px);
	}


```

## @function 的使用
```
	// 函数
	@function jswidth($w){
		@return ($w+100px)*2;
	}

	.box{
		width: jswidth(200px);
	}

```

## 继承 @extend
```
	.item{
		width: 300px;
		height: 200px;	
		background: red;
	}


	div{
		color:red;
		font-size:18px;
		@extend .item;
	}

	.box{
		@extend .item;
		color: pink;
	}
```

##  占位符
```
	// 不会 被 编译到 css 中。
	%clear{
		clear:both;
	}

	%ml10{
		margin-left: 10px;
	}

	div{
		@extend %clear;
	}

	p{
		@extend %ml10;
	}

```
### \*\*\*
| 	|混合|继承|占位符|
|-	|----|----|------|
|定义|@mixin|.time{}|%{}|
|使用|@include|@extend|@extend|
|区别|可以带参数|把之前的样式,放到需要继承的选择器里|不会编译到css 中|

		
