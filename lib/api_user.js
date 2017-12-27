const crypto = require("crypto");
const { postJSON } = require("./util");

class WXBizDataCrypt {
  constructor(appId, sessionKey) {
    this.appId = appId;
    this.sessionKey = sessionKey;
  }

  decryptData(encryptedData, iv) {
    // base64 decode
    const sessionKey = new Buffer(this.sessionKey, "base64");
    encryptedData = new Buffer(encryptedData, "base64");
    iv = new Buffer(iv, "base64");

    let decoded = '';
    try {
      // 解密
      const decipher = crypto.createDecipheriv("aes-128-cbc", sessionKey, iv);
      // 设置自动 padding 为 true，删除填充补位
      decipher.setAutoPadding(true);
      decoded = decipher.update(encryptedData, "binary", "utf8");
      decoded += decipher.final("utf8");

      decoded = JSON.parse(decoded);
    } catch (err) {
      throw new Error("Illegal Buffer");
    }

    if (decoded.watermark.appid !== this.appId) {
      throw new Error("Illegal Buffer");
    }

    return decoded;
  }
}

/**
 * code 换取 session_key
 * @param {*} code
 */
exports.jscode2session = async function(code) {
  const apiUrl =
    `https://api.weixin.qq.com/sns/jscode2session?appid=${this.appid}&secret=${
      this.appsecret
    }&js_code=${code}&grant_type=authorization_code`;
  return this.request(apiUrl, {dataType: 'json'}).then(res => res.toString());
};

/**
 * 获取用户信息
 * @param {*} encryptedData
 * @param {*} iv
 * @param {*} sessionKey
 */
exports.getUserInfo = async function(encryptedData, iv, sessionKey) {
  const pc = new WXBizDataCrypt(this.appid, sessionKey);
  return pc.decryptData(encryptedData, iv);
};

/**
 * 绑定测试微信号
 * @param {*} wechatid
 */
exports.bindTester = async function(wechatid) {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/wxa/bind_tester?access_token=${accessToken}`;
  const params = {
    wechatid: wechatid
  };
  return this.request(apiUrl, postJSON(params));
};

/**
 * 解绑测试微信号
 * @param {*} wechatid
 */
exports.unbindTester = async function(wechatid) {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/wxa/unbind_tester?access_token=${accessToken}`;
  const params = {
    wechatid: wechatid
  };
  return this.request(apiUrl, postJSON(params));
};
