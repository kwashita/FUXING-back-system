# 1.主区域引入(头部和侧栏区域) Home
## 1.头部sys-head
## 2.位置导航sys-location
## 3.侧栏sys-aside
# 2.内容区域
## 1.数据概览 sys-data   
 
## 2.福利企业 sys-business   

## 3.福利管理 sys-admin  
### 1.福利管理 admin-manage
#### 1.基础设置 manage-basic
#### 2.高级设置 manage-advance
#### 3.奖励设置 manage-reward
#### 4.福利详情 manage-details
1.  默认样式details-default
2.  自定义样式details-custom
- custom-text
- custom-pic
- custom-form
- custom-background
- custom-button
3.  秀米样式details-xiumi
#### 5.分享设置 manage-share
### 2.福利分类 admin-classify

## 4.赚取佣金 sys-commission 

## 5.订单管理 sys-order  

## 6.优惠券 sys-coupon   

## 7.财务管理 sys-finance 

## 8.福利中心 sys-center 

## 9.系统设置 sys-set


---
## 文件夹目录  
├── build                      // 构建相关      
├── config                     // 配置相关  
├── src                        // 源代码    
│   ├── api                    // 所有请求  
│   ├── assets                 // 主题 字体等静态资源  
│   ├── components             // 全局公用组件    
│   ├── directive              // 全局指令   
│   ├── filtres                // 全局 filter    
│   ├── router                 // 路由  
│   ├── store                  // 全局 store管理    
│   ├── styles                 // 公共样式  
│   ├── utils                  // 全局公用方法  
│   ├── views                   // 自定义组件   
│   ├── App.vue                // 入口页面  
│   ├── main.js                // 入口 加载组件         
├── static                     // 第三方不打包资源  
├── .babelrc                   // babel-loader 配置    
├── eslintrc.js                // eslint 配置项  
├── .gitignore                 // git 忽略项    
├── favicon.ico                // favicon图标   
├── index.html                 // html模板  
└── package.json               // package.json身份证  

>按照身份证仅有功能开发,如需要添加npm请告知项目人员
---

## 命名规范：
- 组件引入命名规则:     

>JS  
````
import sysAside from '../components/sys-aside'
````
>HTML
````
<sys-aside></sys-aside>
````
