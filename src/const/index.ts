export const BASE_URL = 'http://pre.freshtxp.com'

export interface IHotType {
  title: string
  value: string
}
export interface IInfoList {
  hot: number
  title: string
  img: string
}

// 热门类别
export const HOT_TYPE: IHotType[] = [
  {
    title: '全部',
    value: '',
  },
  {
    title: '科技',
    value: 'kj',
  },
  {
    title: '动漫',
    value: 'dm',
  },
  {
    title: '鬼畜',
    value: 'gc',
  },
  {
    title: '音乐',
    value: 'yy',
  },
  {
    title: '搞笑',
    value: 'gs',
  },
  {
    title: '穿搭',
    value: 'cd',
  },
  {
    title: '软件',
    value: 'rj',
  },
  {
    title: '影视',
    value: 'yss',
  },
  {
    title: '饮食',
    value: 'ys',
  },
  {
    title: '舞蹈',
    value: 'wd',
  },
  {
    title: '其他',
    value: 'qt',
  },
]

// 文章列表
export const INFO_LIST: IInfoList[] = [
  {
    hot: 23670000,
    title: '丁真给家里买了洗衣机和电瓶车',
    img: 'https://freshtxp-static.oss-cn-beijing.aliyuncs.com/attachment/8727ee4e-23f5-428e-ba8e-779a423d9e97.png',
  },
  {
    hot: 450000,
    title: '错换人生28年"当事人生母告开封卫健委:8个月了至少给说法',
    img: 'https://freshtxp-static.oss-cn-beijing.aliyuncs.com/attachment/6fae1eaa-d66a-442f-8c6c-7fb160629a97.png',
  },
  {
    hot: 3000,
    title: '王兴更是坚定背书：“我认为，很多投资者还是低估了电动汽车和理想汽车的潜力',
    img: 'https://freshtxp-static.oss-cn-beijing.aliyuncs.com/attachment/9b45a71a-5c7c-41c0-b77e-16f7345e9753.png',
  },
  {
    hot: 304500,
    title: '王兴更是坚定背书：“我认为，很多投资者还是低估了电动汽车和理想汽车的潜力',
    img: 'https://freshtxp-static.oss-cn-beijing.aliyuncs.com/attachment/698b591c-674e-42ce-acb5-2e6970943c6a.png',
  },
  {
    hot: 23670000,
    title: '丁真给家里买了洗衣机和电瓶车',
    img: 'https://freshtxp-static.oss-cn-beijing.aliyuncs.com/attachment/8f6913a4-5864-457e-8211-86dfc8fe5483.png',
  },
  {
    hot: 450000,
    title: '错换人生28年"当事人生母告开封卫健委:8个月了至少给说法',
    img: 'https://freshtxp-static.oss-cn-beijing.aliyuncs.com/attachment/3e4f668c-1ad1-4d84-bc4e-5b4a92b3785d.png',
  },
  {
    hot: 23670000,
    title: '丁真给家里买了洗衣机和电瓶车',
    img: 'https://freshtxp-static.oss-cn-beijing.aliyuncs.com/attachment/1cd37af2-0a7c-45ef-b50a-866d3ee5b014.png',
  },
  {
    hot: 450000,
    title: '错换人生28年"当事人生母告开封卫健委:8个月了至少给说法',
    img: 'https://freshtxp-static.oss-cn-beijing.aliyuncs.com/attachment/d963a53e-1029-48bf-8dca-b648b27e17a0.png',
  },
]

// 全局主题色
export const PRIMARY_COLOR = '#004c96'

export default {
  BASE_URL,
  HOT_TYPE,
  INFO_LIST,
  PRIMARY_COLOR,
}
