## koala  编译 sass 字符集问题
```
找到安装目录
 C:\Program Files\Koala\rubygems\gems\sass-3.4.9\bin
 下面的 sass  这个文件
 在 所有 require 后面 加入这一行代码：
 Encoding.default_external = Encoding.find('utf-8') 
```
