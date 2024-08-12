



## Tabbar底部标签栏
> **组件名：uaTabbar**
> 代码块： `<ua-tabbar>`


一款超简单的uniapp底部自定义可凸起tabbar组件。


> **注意事项**
> 如果需实现可凸起效果，需配置 ` "dock":"true"`。



### 引入方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。




### 基本用法 

**示例**

- 基础用法

```html
<ua-tabbar bgcolor="#fbfbfb" color="#a3989e" activeColor="#42b983" :tabs="[...]" />
```

- 自定义背景色、颜色、激活颜色、固定位置、点击回调

```html
<ua-tabbar bgcolor="linear-gradient(to top, rgba(0, 255, 127, 0.9), transparent)" color="#eee" activeColor="#ff0" fixed @click="handleTabClicked"
	:tabs="[
		{
			path: `/pages/index/index`,
			icon: `\ue642`,
			title: `首页`,
			badge: 38,
		},
		{
			icon: `\ue62c`,
			dock: true,
			dockBg: `#ff007f`,
			iconSize: `30px`,
		},
		{
			icon: `\ue606`,
			dot: true,
			title: `钱包`,
		},
	]"
 />
```

点击选项，回调函数返回当前**索引值**。

```javascript
handleTabClicked(index) {
	console.log('当前索引：' + index)
},
```



### API

### Popup Props 

|属性名|类型|默认值|说明|
|:-:|:-:|:-:|:-:|
|current|Number|0| 当前选中选项 |
|bgcolor|String|  '#fff'  |    背景色    |
|    color    |String|'#9d9ea5'|文字颜色|
|activeColor|String|'#f57b15'| 选中激活颜色 |
|fixed|Boolean|false|是否固定|
|    tabs     |Array|[]|tabs选项配置|

#### tabs参数

- path: '/pages/index/index'        自定义跳转页面
- icon: 'icon-home'						iconfont图标 支持icon-xxx和`\ue642`写法，在nvue页面必须写成`\ue642`格式，且使用es6反引号，否则字体图标不显示
- title: '首页'       							 标题
- img: 'http://...'   						  自定义图片地址
- activeImg: ''       						  自定义选中图片
- dock: true          						  底部中间凸起按钮
- dockBg: '#f90'      						凸起按钮背景色（不设置则为activeColor）
- iconSize: '30px'    						图标/图片大小
- badge: 18           						  小红点数字
- dot: true           							小红点



### 💝最后

开发不易，希望各位小伙伴们多多支持下哈~~☕️☕️