# 操作手册
实现了简单的 SPA 应用。

### 前端路由
可以修改 main.js 中的 routes 对象来添加前端路由：

```javascript
const routes = {
  '': 'home.html',
  '#/my': 'my.html',
};
```

### 编写子页面

通过编写 views 目录下的 html 文件来编写子页面，编写属性时注意，不要与现有的元素属性冲突。