BreadCrumbs 组件是面包屑
CustomMenu 菜单结构，其中 aside 类似于手风琴结构的为自定义
IconFont 是批量使用 icon 图片时用的，主要使用其中的 type 属性，iconfont 地址最好使用以 .js 结尾的 symbol 地址
layout 作用是布局结构，
UseIntroduce 组件是使用说明
useLocation 可以拿到当前的 location，用于 刷新页面时 可以自动选择 aside 的标签。
 在v4版本中，Avatar 中 icon 不再使用字符串了，而是  icon={<UserOutlined />} 还用 Icon 的图标

 Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode
 解决方案： 在 index.tsx 中去掉严格模式，只留下 <App>, 即可
 文字水平垂直居中，最简单的方法是 margin: auto;
 在选择首页时，要将首页 <Route component={Index} /> 放在 重定向  <Route exact path="/" render={() => <Redirect to="/index" />} /> 之后，这样即使在 url #/ 后面不填什么，也可以保证默认进入首页，不会出现页面为空的情况。
 尝试过 InputNumber 组件，但是前缀、后缀不生效，所以只能使用 Input 组件来代替 InputNumber 组件，下面的代码将是设置 Input 组件value只能是数字的情况。 
 `const reg = /^-?\d*(\.\d*)?$/;
    if ((!isNaN(numberValue) && reg.test(numberValue)) || numberValue === '' || numberValue === '-') {
      setValue(numberValue)
    } ` 
保留两位小数  `replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3")` 