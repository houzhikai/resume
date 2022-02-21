BreadCrumbs 组件是面包屑
CustomMenu 菜单结构，其中 aside 类似于手风琴结构的为自定义
IconFont 是批量使用 icon 图片时用的，主要使用其中的 type 属性，iconfont 地址最好使用以 .js 结尾的 symbol 地址
layout 作用是布局结构，
UseIntroduce 组件是使用说明
useLocation 可以拿到当前的 location，用于 刷新页面时 可以自动选择 aside 的标签。
 在v4版本中，Avatar 中 icon 不再使用字符串了，而是  icon={<UserOutlined />} 还用 Icon 的图标

 Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode
 解决方案： 在 index.tsx 中去掉严格模式，只留下 <App>, 即可