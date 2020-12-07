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
    img: 'https://imgs.mrpzx.cn/ImageHistory/2020-12-03/1606983639000',
  },
  {
    hot: 450000,
    title: '错换人生28年"当事人生母告开封卫健委:8个月了至少给说法',
    img:
      'http://t10.baidu.com/it/u=486009981,1565373997&fm=173&app=49&f=JPEG?w=312&h=208&s=CFA17C6CF672499CF3AC2DDA03008092',
  },
  {
    hot: 3000,
    title: '王兴更是坚定背书：“我认为，很多投资者还是低估了电动汽车和理想汽车的潜力',
    img:
      'http://t10.baidu.com/it/u=1418821389,3115759831&fm=173&app=49&f=JPEG?w=312&h=208&s=2A9266847F4E37491297259B0300508B',
  },
  {
    hot: 304500,
    title: '王兴更是坚定背书：“我认为，很多投资者还是低估了电动汽车和理想汽车的潜力',
    img:
      'http://t12.baidu.com/it/u=3313202288,1870692570&fm=173&app=49&f=JPEG?w=312&h=208&s=09417B6EC7372594136A098A0300B09F',
  },
  {
    hot: 23670000,
    title: '丁真给家里买了洗衣机和电瓶车',
    img: 'https://imgs.mrpzx.cn/ImageHistory/2020-12-03/1606983639000',
  },
  {
    hot: 450000,
    title: '错换人生28年"当事人生母告开封卫健委:8个月了至少给说法',
    img:
      'http://t10.baidu.com/it/u=486009981,1565373997&fm=173&app=49&f=JPEG?w=312&h=208&s=CFA17C6CF672499CF3AC2DDA03008092',
  },
  {
    hot: 23670000,
    title: '丁真给家里买了洗衣机和电瓶车',
    img: 'https://imgs.mrpzx.cn/ImageHistory/2020-12-03/1606983639000',
  },
  {
    hot: 450000,
    title: '错换人生28年"当事人生母告开封卫健委:8个月了至少给说法',
    img:
      'http://t10.baidu.com/it/u=486009981,1565373997&fm=173&app=49&f=JPEG?w=312&h=208&s=CFA17C6CF672499CF3AC2DDA03008092',
  },
]

export default {
  BASE_URL,
  HOT_TYPE,
  INFO_LIST,
}
