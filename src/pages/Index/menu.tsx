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
