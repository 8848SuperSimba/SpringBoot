# 校园二手交易系统

## 项目简介
这是一个基于SpringBoot开发的校园二手交易系统，为在校学生提供便捷的二手物品交易平台。系统支持用户和商家两种角色，实现了完整的二手商品交易业务流程，包括商品发布、交易管理、订单处理等功能。

## 功能特点
- 用户管理：用户注册、登录、个人信息管理
- 商家管理：商家注册、登录、商品管理
- 商品管理：商品分类、商品信息维护、库存管理
- 订单管理：租赁订单、发货订单、完成订单
- 信誉值管理：商家信誉值评估
- 地址管理：用户收货地址管理
- 评论功能：商品评论和回复
- 收藏功能：用户商品收藏

## 技术栈
- 后端：SpringBoot 2.7.x
- 数据库：MySQL 5.7
- 前端：HTML5、CSS3、JavaScript、Vue.js
- 项目管理：Maven 3.8.x
- 持久层：MyBatis
- 缓存：Redis
- 文件存储：本地文件系统

## 系统角色
1. 管理员
   - 系统管理
   - 用户管理
   - 商家管理
   - 订单管理
   - 信誉值管理

2. 商家
   - 商品管理
   - 订单处理

3. 用户
   - 商品浏览
   - 租赁下单
   - 订单管理
   - 地址管理
   - 收藏管理

## 安装说明
1. 环境要求
   - JDK 1.8+
   - MySQL 5.7+
   - Maven 3.8+
   - Redis 6.0+
   - Node.js 14.0+（前端开发）

2. 数据库配置
   - 创建数据库：2022011149
   - 字符集：utf8mb4
   - 排序规则：utf8mb4_general_ci
   - 导入数据库脚本：2022011149.sql

3. 项目配置
   - 修改application.yml中的数据库连接信息
   - 配置服务器端口和上下文路径
   - 配置Redis连接信息
   - 配置文件上传路径和访问权限

## 访问地址
- 前端地址：http://localhost:8080/springbootyf10w/front/index.html
- 后台地址：http://localhost:8080/springbootyf10w/admin/dist/index.html

## 默认账号
1. 管理员账号
   - 用户名：abo
   - 密码：abo

2. 测试用户账号
   - 账号：用户1
   - 密码：123456

3. 测试商家账号
   - 账号：商家1
   - 密码：123456

## 项目结构
```
src/
├── main/                    # 主要源代码
│   ├── java/               # Java源代码
│   │   ├── controller/     # 控制器层
│   │   ├── service/        # 服务层
│   │   ├── dao/           # 数据访问层
│   │   ├── entity/        # 实体类
│   │   └── config/        # 配置类
│   └── resources/          # 配置文件
│       ├── static/         # 静态资源
│       ├── mapper/         # MyBatis映射文件
│       ├── front/          # 前端页面
│       ├── admin/          # 后台管理页面
│       └── application.yml # 应用配置文件
└── test/                   # 测试代码
```

## 注意事项
1. 首次运行需要导入数据库脚本
2. 确保MySQL服务正常运行
3. 检查端口8080是否被占用
4. 上传文件目录需要配置正确的访问权限
5. 注意校园网络环境下的访问限制
6. Redis服务需要正常运行
7. 文件上传目录需要有写入权限
8. 建议定期备份数据库

## 版权信息
Copyright © 2024 All Rights Reserved 