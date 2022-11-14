const menu = [
    {
        title: '首页',
        key: '/home',
        icon: 'icon-shouye',
        auth: [1]
    },
    {
        title: '通用',
        key: '/public',
        icon: 'icon-appstore',
        auth: [1],
        subs: [
            // { title: '按钮', key: '/public/button', icon: '' },
            { title: '复制', key: '/public/myCopy', icon: '' },
            { title: '上传', key: '/public/upload', icon: '' },
            { title: '弹幕', key: '/public/barrage', icon: '' },
            { title: '互动', key: '/public/interactive', icon: '' },
            { title: '图表', key: '/public/charts', icon: '' },
            { title: '滚动', key: '/public/rolling', icon: '' },
            { title: '排版', key: '/public/typography', icon: '' },
        ]
    },
    {
        title: '表单',
        key: '/form',
        icon: 'icon-form_favor_light',
        auth: [1],
        subs: [
            { title: 'form切换', key: '/form/tab', icon: '' },
            { title: '动态增减嵌套字段', key: '/form/embedded', icon: '' },
            { title: '自动计算百分比', key: '/form/calculate', icon: '' },
            { title: '步骤表单', key: '/form/step', icon: '' },
            { title: '基本表单', key: '/form/base', icon: '' },
        ]
    },
    {
        title: '表格',
        key: '/tabs',
        icon: 'icon-m-tabs',
        auth: [1],
        subs: [
            { title: '最基本的表格', key: '/tabs/tab', icon: '' },
            { title: '搜索表单', key: '/tabs/searchTable', icon: '' },
        ]
    },
    {
        title: '动画',
        key: '/transform',
        icon: 'icon-chuangkoudonghua',
        auth: [1],
        subs: [
            { title: '缩放', key: '/transform/zoom', icon: '' },
            { title: '旋转', key: '/transform/rotate', icon: '' },
        ]
    },
    {
        title: '组件库',
        key: '/components',
        icon: 'icon-yuanshuju-zujianku',
        auth: [1],
        subs: [
            { title: '选择', key: '/components/select', icon: '' },
            { title: '次级选择', key: '/components/cascader', icon: '' },
        ]
    },
    {
        title: '练习',
        key: '/practice',
        icon: 'icon-lianxi',
        auth: [1],
        subs: [
            { title: '编辑器', key: '/practice/editor', icon: '' },
        ]
    },
    {
        title: '关于我们',
        key: '/about',
        icon: 'icon-guanyuwomen',
        auth: [1]
    }
];

export default menu;
