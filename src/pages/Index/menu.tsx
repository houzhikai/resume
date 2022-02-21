const menu = [
    {
        title: '首页',
        key: '/index',
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
        title: '表单',
        key: '/form',
        icon: 'icon-form_favor_light',
        auth: [1],
        subs: [
            { title: 'form切换', key: '/form/tab', icon: '' },
            { title: '动态增减嵌套字段', key: '/form/embedded', icon: '' },
        ]
    },
    {
        title: '关于我们',
        key: '/about',
        icon: 'icon-guanyuwomen',
        auth: [1]
    }
]

export default menu;
