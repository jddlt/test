export default {
  pages: ['pages/index/index', 'pages/login/index', 'pages/mine/index', 'pages/goods/index', 'pages/result/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#333333',
    borderStyle: 'white',
    list: [
      {
        iconPath: 'assets/image/ico_home.png',
        selectedIconPath: 'assets/image/ico_home_per.png',
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        iconPath: 'assets/image/ico_category.png',
        selectedIconPath: 'assets/image/ico_category_per.png',
        pagePath: 'pages/goods/index',
        text: '商品推荐',
      },
      {
        iconPath: 'assets/image/ico_me.png',
        selectedIconPath: 'assets/image/ico_me_per.png',
        pagePath: 'pages/mine/index',
        text: '我的',
      },
    ],
  },
}
