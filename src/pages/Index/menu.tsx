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

]

export default menu;
