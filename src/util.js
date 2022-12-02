// https://www.javascriptobfuscator.com/Javascript-Obfuscator.aspx
let key=""
/*
 function encrypt(plainText) {
    axios.get('https://ipapi.co/json/').then( async item => {
      key = await item.data.network
    })
    const ciphertext = CryptoJS.AES.encrypt(plainText, key).toString();
    return ciphertext
}


function decrypt(cipherText) {
     axios.get('https://ipapi.co/json/').then( async item => {
      key = await item.data.network
    })
    const bytes  = CryptoJS.AES.decrypt(cipherText, key);
    const plainText = bytes.toString(CryptoJS.enc.Utf8);
    return plainText
}*/

var _0xa823=["\x6E\x65\x74\x77\x6F\x72\x6B","\x64\x61\x74\x61","\x74\x68\x65\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x70\x61\x70\x69\x2E\x63\x6F\x2F\x6A\x73\x6F\x6E\x2F","\x67\x65\x74","\x65\x6E\x63\x72\x79\x70\x74","\x41\x45\x53"];function encrypt(_0xf6bex2){axios[_0xa823[4]](_0xa823[3])[_0xa823[2]](async (_0xf6bex3)=>{key=  await _0xf6bex3[_0xa823[1]][_0xa823[0]]});const _0xf6bex4=CryptoJS[_0xa823[6]][_0xa823[5]](_0xf6bex2,key).toString();return _0xf6bex4}
var _0xa4b0=["\x6E\x65\x74\x77\x6F\x72\x6B","\x64\x61\x74\x61","\x74\x68\x65\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x70\x61\x70\x69\x2E\x63\x6F\x2F\x6A\x73\x6F\x6E\x2F","\x67\x65\x74","\x64\x65\x63\x72\x79\x70\x74","\x41\x45\x53","\x65\x6E\x63"];function decrypt(_0xcf79x2){axios[_0xa4b0[4]](_0xa4b0[3])[_0xa4b0[2]](async (_0xcf79x3)=>{key=  await _0xcf79x3[_0xa4b0[1]][_0xa4b0[0]]});const _0xcf79x4=CryptoJS[_0xa4b0[6]][_0xa4b0[5]](_0xcf79x2,key);const _0xcf79x5=_0xcf79x4.toString(CryptoJS[_0xa4b0[7]].Utf8);return _0xcf79x5}