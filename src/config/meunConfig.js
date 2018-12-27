export default [{
  title: '首页',
  type: 'home',
  key: '/admin/home'
},
{
  title: 'UI',
  type: 'html5',
  key: '/admin/ui',
  children: [{
      title: '按钮',
      type:'mail',
      key: '/admin/ui/buttons',
    },
    {
      title: '弹框',
      type:'printer',
      key: '/admin/ui/modals',
    },
    {
      title: 'Loading',
      type:'loading',
      key: '/admin/ui/loadings',
    },
    {
      title: '通知提醒',
      type:'notification',
      key: '/admin/ui/notification',
    },
    {
      title: '全局Message',
      type:'message',
      key: '/admin/ui/messages',
    },
    {
      title: 'Tab页签',
      type:'alibaba',
      key: '/admin/ui/tabs',
    },
    {
      title: '图片画廊',
      type:'alipay',
      key: '/admin/ui/gallery',
    },
    {
      title: '轮播图',
      type:'alipay',
      key: '/admin/ui/carousel',
    }
  ]
},
{
  title: '表单',
  type:'chrome',
  key: '/admin/form',
  children: [{
    title: '登录',
    type:'login',
      key: '/admin/form/login',
    },
    {
      title: '注册',
      type:'twitter',
      key: '/admin/form/reg',
    }
  ]
},
{
  title: '表格',
  type: 'table',
  key: '/admin/table',
  children: [{
    title: '基础表格',
    type: 'zhihu',
      key: '/admin/table/basic',
    },
    {
      title: '高级表格',
      type: 'facebook',
      key: '/admin/table/high',
    }
  ]},{
    title: '图标',
    type: 'apple',
    key: '/admin/charts',
    children: [{
      title: '柱形图',
      type: 'bar-chart',
        key: '/admin/charts/bar'
      },
      {
        title: '饼图',
        type: 'pie-chart',
        key: '/admin/charts/pie'
      },
      {
        title: '折线图',
        type: 'line-chart',
        key: '/admin/charts/line'
      },
    ]
  },{
  title: '富文本',
  type: 'taobao',
  key: '/admin/rich'
},
{
  title: '城市管理',
  type: 'instagram',
  key: '/admin/city'
},
{
  title: '订单管理',
  type: 'wechat',
  key: '/admin/order',
  btnList: [{
    title: '订单详情',
    type: 'weibo',
      key: 'detail'
    },
    {
      title: '结束订单',
      type: 'aliwangwang',
      key: 'finish'
    }
  ]
},
{
  title: '员工管理',
  type: 'github',
  key: '/admin/user'
},
{
  title: '车辆地图',
  type: 'windows',
  key: '/admin/bikeMap'
},
{
  title: '权限设置',
  type: 'setting',
  key: '/admin/permission'
}
]