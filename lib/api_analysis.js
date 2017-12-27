/**
 * 概况趋势
 * beginDate 开始日期
 * endDate 结束日期，限定查询1天数据，end_date允许设置的最大值为昨日
 */
exports.dailySummaryTrend = async function(beginDate, endDate) {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/datacube/getweanalysisappiddailysummarytrend?access_token=${accessToken}`;
  const params = {
    begin_date: beginDate,
    end_date: endDate
  };
  return this.request(apiUrl, { method: "post", data: params });
};

/**
 * 日趋势
 * beginDate 开始日期
 * endDate 结束日期，限定查询1天数据，endDate允许设置的最大值为昨日
 */
exports.dailyVisitTrend = async function(beginDate, endDate) {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/datacube/getweanalysisappiddailyvisittrend?access_token=${accessToken}`;
  const params = {
    begin_date: beginDate,
    end_date: endDate
  };
  return this.request(apiUrl, { method: "post", data: params });
};

/**
 * 周趋势
 * beginDate 开始日期，为周一日期
 * endDate 结束日期，为周日日期，限定查询一周数据
 */
exports.weeklyVisitTrend = async function(beginDate, endDate) {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/datacube/getweanalysisappidweeklyvisittrend?access_token=${accessToken}`;
  const params = {
    begin_date: beginDate,
    end_date: endDate
  };
  return this.request(apiUrl, { method: "post", data: params });
};

/**
 * 月趋势
 * beginDate 开始日期，为自然月第一天
 * endDate 结束日期，为自然月最后一天，限定查询一个月数据
 */
exports.monthlyVisitTrend = async function(beginDate, endDate) {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/datacube/getweanalysisappidmonthlyvisittrend?access_token=${accessToken}`;
  const params = {
    begin_date: beginDate,
    end_date: endDate
  };
  return this.request(apiUrl, { method: "post", data: params });
};

/**
 * 访问分布
 * beginDate 开始日期
 * endDate 结束日期，限定查询1天数据，endDate允许设置的最大值为昨日
 */
exports.visitDistribution = async function(beginDate, endDate) {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/datacube/getweanalysisappidvisitdistribution?access_token=${accessToken}`;
  const params = {
    begin_date: beginDate,
    end_date: endDate
  };
  return this.request(apiUrl, { method: "post", data: params });
};

/**
 * 日留存
 * beginDate 开始日期
 * endDate 结束日期，限定查询1天数据，endDate允许设置的最大值为昨日
 */
exports.dailyRetainInfo = async function(beginDate, endDate) {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/datacube/getweanalysisappiddailyretaininfo?access_token=${accessToken}`;
  const params = {
    begin_date: beginDate,
    end_date: endDate
  };
  return this.request(apiUrl, { method: "post", data: params });
};
/**
 * 周留存
 * beginDate 开始日期，为周一日期
 * endDate 结束日期，为周日日期，限定查询一周数据
 */
exports.weeklyRetainInfo = async function(beginDate, endDate) {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/datacube/getweanalysisappidweeklyretaininfo?access_token=${accessToken}`;
  const params = {
    begin_date: beginDate,
    end_date: endDate
  };
  return this.request(apiUrl, { method: "post", data: params });
};

/**
 * 月留存
 * beginDate 开始日期，为自然月第一天
 * endDate 结束日期，为自然月最后一天，限定查询一个月数据
 */
exports.monthlyRetainInfo = async function(beginDate, endDate) {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/datacube/getweanalysisappidmonthlyretaininfo?access_token=${accessToken}`;
  const params = {
    begin_date: beginDate,
    end_date: endDate
  };
  return this.request(apiUrl, { method: "post", data: params });
};

/**
 * 访问页面
 * beginDate 开始日期
 * endDate 结束日期，限定查询1天数据，endDate允许设置的最大值为昨日
 */
exports.visitPage = async function(beginDate, endDate) {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/datacube/getweanalysisappidvisitpage?access_token=${accessToken}`;
  const params = {
    begin_date: beginDate,
    end_date: endDate
  };
  return this.request(apiUrl, { method: "post", data: params });
};

/**
 * 用户画像
 * beginDate 开始日期
 * endDate 结束日期，开始日期与结束日期相差的天数限定为0/6/29，分别表示查询最近1/7/30天数据，endDate允许设置的最大值为昨日
 */
exports.userPortrait = async function(beginDate, endDate) {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/datacube/getweanalysisappiduserportrait?access_token=${accessToken}`;
  const params = {
    begin_date: beginDate,
    end_date: endDate
  };
  return this.request(apiUrl, { method: "post", data: params });
};
