import Taro from '@tarojs/taro'

/**
 * 清除对象的无用key
 */
export const filterNullParams = (obj: Record<string, unknown> = {}): Record<string, unknown> => {
  const tempObj: Record<string, unknown> = {}
  Object.entries(obj).map(([key, val]) => {
    if (val !== undefined && val !== null) {
      tempObj[key] = val
    }
  })
  return tempObj
}

/**
 * 获取模糊图过度加载
 * @param url 原图url
 * @param width 缩略图宽度 越小越模糊
 */

export const thumpImg = (url: string, width: number): string => `${url}?x-oss-process=image/resize,w_${width}`

/**
 * Js中单位转换
 * @param 长度
 */

export const transUnit = (x?: string | number): string => (typeof x === 'string' ? x : Taro.pxTransform(Number(x)))
