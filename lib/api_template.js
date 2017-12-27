/**
 * 获取小程序模板库标题列表
 * @param {*} offset
 * @param {*} count
 */
exports.getTemplates = async function(offset, count) {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/cgi-bin/wxopen/template/library/list?access_token=${accessToken}`;
  const params = {
    offset: offset,
    count: count
  };
  return this.request(apiUrl, { method: "post", data: params });
};

/**
 * 获取模板库某个模板标题下关键词库
 * @param {*} id
 */
exports.getKeywordTemplates = async function(id) {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/cgi-bin/wxopen/template/library/get?access_token=${accessToken}`;
  const params = {
    id: id
  };
  return this.request(apiUrl, { method: "post", data: params });
};

/**
 * 组合模板并添加至帐号下的个人模板库
 * @param {*} id
 * @param {*} keywordIdList
 */
exports.addTemplate = async function(id, keywordIdList) {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/cgi-bin/wxopen/template/add?access_token=${accessToken}`;

  const params = {
    id: id,
    keyword_id_list: keywordIdList
  };
  return this.request(apiUrl, { method: "post", data: params });
};

/**
 * 获取帐号下已存在的模板列表
 * @param {*} offset
 * @param {*} count
 */
exports.getPrivateTemplates = async function(offset, count) {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/cgi-bin/wxopen/template/list?access_token=${accessToken}`;
  const params = {
    offset: offset,
    count: count
  };
  return this.request(apiUrl, { method: "post", data: params });
};

/**
 * 删除帐号下的某个模板
 * @param {*} id
 */
exports.delPrivateTemplate = async function(id) {
  const apiUrl = `https://api.weixin.qq.com/cgi-bin/wxopen/template/del?access_token=${
    this.token.access_token
  }`;
  const params = {
    template_id: id
  };
  return this.request(apiUrl, { method: "post", data: params });
};

/**
 * 发送模板消息
 * @param {String} openid 用户的openid
 * @param {String} templateId 模板ID
 * @param {String} url URL置空，则在发送后，点击模板消息会进入一个空白页面（ios），或无法点击（android）
 * @param {String} color 顶部颜色
 * @param {Object} data 渲染模板的数据
 */
exports.sendTemplate = async function(templateData) {
  const {
    openid,
    templateId,
    page,
    formId,
    color,
    data,
    emphasisKeyword
  } = templateData;

  const { accessToken } = await this.ensureAccessToken();
  const apiUrl =
    "https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=" +
    accessToken;
  const template = {
    touser: openid,
    template_id: templateId,
    page: page,
    form_id: formId,
    color: color,
    data: data,
    emphasis_keyword: emphasisKeyword
  };
  return this.request(apiUrl, postJSON(template));
};
