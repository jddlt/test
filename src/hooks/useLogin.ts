import { useState, useRef, useEffect, useCallback } from 'react'
import Taro from '@tarojs/taro'

/**
 * Login 获取 Code
 */
const useLogin = (): string => {
  const [code, setCode] = useState<string>('')
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const Login = useCallback(() => {
    console.log('========= Login =========')
    Taro.login({
      success: res => {
        if (res.code) {
          setCode(res.code)
        } else {
          console.log('登录失败！' + res.errMsg)
          Taro.showToast({
            icon: 'none',
            title: '登录失败',
          })
        }
      },
    })
  }, [])

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    Login()
    timerRef.current = setInterval(() => Login(), 4 * 60 * 1000) // 4分钟一刷新
    return () => {
      timerRef.current && clearInterval(timerRef.current)
    }
  }, [Login])
  return code
}

export default useLogin
