# jQuery jsonP  的 实例
##js
```
	 $.ajax({
	   url: "http://localhost/H5_26/project03/02.php",
	   dataType:'jsonp',
	   jsonp: "callback",
	   // jsonpCallback:"test"
	   type:'get',
	   // data:{},
	   success: function(data){
	   		alert(data.name);
	   }
	 });
```

## php
```
	$arr = array('name'=>'jack','sex'=>'男');	

	echo $_GET['callback'].'('.json_encode($arr).')';

```