const menu = [
    {
        key: '/index',
        title: '首页',
        icon: 'icon-shouye',
        auth: [1]
    },
    {
        title: '通用',
        key: '/public',
        icon: 'icon-appstore',
        auth: [1],
        subs: [
            { title: '按钮', key: '/public/button', icon: '' },
            { title: '图标', key: '/public/icon', icon: '' }
        ]
    },
    {
        title: '测试',
        key: '/test',
        icon: 'icon-appstore',
        auth: [1],
        subs: [
            { title: '按钮', key: '/test/button', icon: '' },
            { title: '图标', key: '/test/icon', icon: '' }
        ]
    },
    {
        title: '关于',
        key: '/about',
        icon: 'user',
        auth: [1]
    }
]

export default menu;
