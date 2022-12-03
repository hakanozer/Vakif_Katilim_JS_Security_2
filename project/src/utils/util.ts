import CryptoJS from 'crypto-js'
const key = process.env.CryptoKey!

export const encrypt = (plainText: string) : string => {
    const ciphertext = CryptoJS.AES.encrypt(plainText, key).toString()
    return ciphertext
}

export const decrypt = (cipherText:string) : string => {
    const bytes  = CryptoJS.AES.decrypt(cipherText, key)
    const plainText = bytes.toString(CryptoJS.enc.Utf8)
    return plainText
}