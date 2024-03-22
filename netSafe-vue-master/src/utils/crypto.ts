//crypto.js文件内容
import CryptoJS from 'crypto-js'
import { Base64 } from 'js-base64'
export default {
  // 加密
  /**
   * @description: 加密
   * @param {*} word
   * @param {*} keyStr
   */
  set(word: string, keyStr?: string) {
    keyStr = keyStr || 'abcdef01234567ii' // 16位的密钥，自己定义，和下面的密钥要相同
    const srcs = CryptoJS.enc.Utf8.parse(word) //  字符串到数组转换，解析明文
    const key = CryptoJS.enc.Utf8.parse(keyStr) //  字符串到数组转换，解析秘钥
    // mode:加密方式；padding:填充方式；iv便宜向量（可选）
    const encrypted = CryptoJS.AES.encrypt(srcs, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    })
    const result = Base64.encode(encrypted.toString())
    return result // 加密后的结果是对象，要转换为文本
  },
  /**
   * @description: 解密
   * @param {*} word
   * @param {*} keyStr
   */
  get(word: string, keyStr?: string) {
    keyStr = keyStr || 'abcdef01234567ii'
    word = Base64.decode(word)
    const key = CryptoJS.enc.Utf8.parse(keyStr) //  字符串到数组转换
    const decrypt = CryptoJS.AES.decrypt(word, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    })
    const result = CryptoJS.enc.Utf8.stringify(decrypt).toString()
    return result //  数组到字符串转换
  }
}
