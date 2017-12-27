/**
 * 添加地点
params{
    "related_name":"XXX公司", //经营资质主体
    "related_credential":"12345678-0", //经营资质证件号
    "related_address":"广州市新港中路397号TIT创意园", //经营资质地址
    "related_proof_material":"3LaLzqiTrQcD20DlX_o-OV1-nlYMu7sdVAL7SV2PrxVyjZFZZmB3O6LPGaYXlZWq" //相关证明材料照片临时素材mediaid
}
 */
exports.addNearbyPoi = async function(params) {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/wxa/addnearbypoi?access_token=${accessToken}`;
  return this.request(apiUrl, { method: "post", data: params });
};

/**
 * 添加地点
 * poiId 附近地点ID
 */
exports.delNearbyPoi = async function(poiId) {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/wxa/delnearbypoi?access_token=${accessToken}`;
  const params = {
    poi_id: poiId
  };
  return this.request(apiUrl, { method: "post", data: params });
};

/**
 * 展示/取消展示附近小程序
 * poiId 附近地点ID
 * status 0：取消展示；1：展示
 */
exports.setNearbyPoiShowStatus = async function(poiId, status) {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/wxa/setnearbypoishowstatus?access_token=${accessToken}`;
  const params = {
    poi_id: poiId,
    status: status
  };
  return this.request(apiUrl, { method: "post", data: params });
};
