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


## todo

- add mongodb session store
- add multer
- plain post
- add queue（https://github.com/Automattic/kue）
- add cors
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
    
    