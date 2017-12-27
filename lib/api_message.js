/**
 * 客服消息，发送文本消息
 * @param {String} openid 用户的openid
 * @param {String} text 发送的消息内容
 */
exports.sendText = async function(openid, text) {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl =
    "https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=" +
    accessToken;
  const data = {
    touser: openid,
    msgtype: "text",
    text: {
      content: text
    }
  };
  return this.request(apiUrl, postJSON(data));
};

/**
 * 客服消息，发送图片消息
 * @param {String} openid 用户的openid
 * @param {String} mediaId 媒体文件的ID，参见uploadMedia方法
 */
exports.sendImage = async function(openid, mediaId) {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl =
    "https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=" +
    accessToken;
  const data = {
    touser: openid,
    msgtype: "image",
    image: {
      media_id: mediaId
    }
  };
  return this.request(apiUrl, postJSON(data));
};

/**
 * 客服消息，发送图文链接
 * @param {String} openid 用户的openid
 * @param {String} title 消息标题
 * @param {String} description 图文链接消息
 * @param {String} url 图文链接消息被点击后跳转的链接
 * @param {String} thumbUrl 封面图片的临时cdn链接
 */
exports.sendLink = async function(openid, title, description, url, thumbUrl) {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl =
    "https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=" +
    accessToken;
  const data = {
    touser: openid,
    msgtype: "link",
    link: {
      title: title,
      description: description,
      url: url,
      thumb_url: thumbUrl
    }
  };
  return this.request(apiUrl, postJSON(data));
};

/**
 * 客服消息，发送小程序卡片
 * @param {String} openid 用户的openid
 * @param {String} title 消息标题
 * @param {String} pagepath 小程序的页面路径，跟app.json对齐，支持参数，比如pages/index/index?foo=bar
 * @param {String} thumbMediaId 小程序消息卡片的封面， image类型的media_id，通过新增素材接口上传图片文件获得，建议大小为520*416
 */
exports.sendCard = async function(openid, title, pagepath, thumbMediaId) {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl =
    "https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=" +
    accessToken;
  const data = {
    touser: openid,
    msgtype: "miniprogrampage",
    miniprogrampage: {
      title: title,
      pagepath: pagepath,
      thumb_media_id: thumbMediaId
    }
  };
  return this.request(apiUrl, postJSON(data));
};
