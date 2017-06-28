<?php 

	$arr = array('name'=>'jack','sex'=>'男');	

	echo $_GET['callback'].'('.json_encode($arr).')';
