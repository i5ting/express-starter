# Express Starter

- use express 4.*
- use jade
- use mongoose
- use config.json
- use session
- use bluebird for promise/A+ 
- use mocha for test
- add startmongodb.sh && start.sh
- add pm2 for deploy
- use supervisor for live reload
- add multer（2015.5.12 07：09）
- plain post（2015.5.12 07：09）
- add cors（2015.5.12 07：19）

## todo

- add mongodb session store
- add queue（https://github.com/Automattic/kue）
- add is_js
- add log4js
- add require-directory
- add bcrypt
- add ueditor

## 目录说明

- m （增加models目录）
- v （使用默认的views）
- c （使用routes路由 + actions具体业务逻辑）
- bin 是系统可执行脚本存放位置目录
- test 是默认测试目录
- config 是配置项目录，比如db信息等
- middleware 是express中间件目录，默认有一个检查session的中间件


## pm2 tips


启动项目

    sudo pm2 start app.js -i max --name 'express-starter'


查看状态

    sudo pm2 status


停止所有

    sudo pm2 stop all
    
## 技术点

### multer上传

express 4 官方上传中间件

https://github.com/expressjs/multer

```
var multer       = require('multer');


var app = express();

 
app.use(multer({ 
  dest: './uploads/',
  rename: function (fieldname, filename) {
    return filename.replace(/\W+/g, '-').toLowerCase() + Date.now()
  }
}))
```

### plain post

3种不同的post

- Post with x-www-form-urlencoded
- Post with form-data
- Post with raw

头2种express是内置处理的，第三种要自己处理

```
var app = express();

app.use(function(req, res, next){
  if (req.is('text/*')) {
    req.text = '';
    req.setEncoding('utf8');
    req.on('data', function(chunk){ req.text += chunk });
    req.on('end', next);
  } else {
    next();
  }
});
```

测试方法

```
echo -n 'post raw json'
curl -d "{"a":"1","b":"2","c":{"a":"1","b":"2"}}" http://127.0.0.1:3001/users/post
```

更多见 https://github.com/i5ting/node-http


### 支持跨域cors

```
// 支持跨域
app.use(require('cors')());
```