/**
 * 获取小程序二维码
 * @param {*} path
 * @param {*} width
 * @param {*} type
 */
exports.getWxaQrcode = async function(path, width = 430, type = 0) {
  const { accessToken } = await this.ensureAccessToken();
  let apiUrl = `https://api.weixin.qq.com/wxa/getwxacode?access_token=${accessToken}`;
  if (type === 1) {
    apiUrl = `https://api.weixin.qq.com/cgi-bin/wxaapp/createwxaqrcode?access_token=${accessToken}`;
  }
  const params = {
    path: path,
    width: width
  };

  return this.request(apiUrl, { method: "post", data: params });
};

/**
 * 适用于需要的码数量极多，或仅临时使用的业务场景
 */
exports.getWxaQrcodeUnlimit = async function(scene = "", width = 430) {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `http://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=${accessToken}`;
  const params = {
    scene: scene,
    width: width
  };

  return this.request(apiUrl, { method: "post", data: params });
};
