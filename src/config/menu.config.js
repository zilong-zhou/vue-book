// 导航栏数据
module.exports = [
  {
    id: '1',
    icon: 'el-icon-mouse',
    name: '首页',
    path: '/home',
    submenu: [{
      id: '1-1',
      name: '首页',
      path: '/home'
    }]
  },
  {
    id: '2',
    icon: 'el-icon-collection',
    name: '图书管理',
    submenu: [{
      id: '2-1',
      icon: 'el-icon-reading',
      name: '图书信息',
      path: '/bookinfo'
    }]
  }
]
