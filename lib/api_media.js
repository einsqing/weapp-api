const util = require("util");
const path = require("path");
const { stat } = require("fs");
const formstream = require("formstream");
const statAsync = util.promisify(stat);

/**
 * 获取临时素材
 * 详情请见：<http://mp.weixin.qq.com/wiki/11/07b6b76a6b6e8848e855a435d5e34a5f.html>
 * Examples:
 * ```
 * api.getMedia('media_id');
 * ```
 * - `result`, 调用正常时得到的文件Buffer对象
 * - `res`, HTTP响应对象
 * @param {String} mediaId 媒体文件的ID
 */
exports.getMedia = async function(mediaId) {
  const { accessToken } = await this.ensureAccessToken();
  const url =
    "https://api.weixin.qq.com/cgi-bin/media/get?access_token=" +
    accessToken +
    "&media_id=" +
    mediaId;

  const opts = {
    timeout: 60000 // 60秒超时
  };
  return this.request(url, opts);
};
/**
 * 上传图文消息内的图片获取URL
 * 详情请见：<http://mp.weixin.qq.com/wiki/15/5380a4e6f02f2ffdc7981a8ed7a40753.html>
 * Examples:
 * ```
 * api.uploadImage('filepath');
 * ```
 * Result:
 * ```
 * {"url":  "http://mmbiz.qpic.cn/mmbiz/gLO17UPS6FS2xsypf378iaNhWacZ1G1UplZYWEYfwvuU6Ont96b1roYsCNFwaRrSaKTPCUdBK9DgEHicsKwWCBRQ/0"}
 * ```
 * @param {String} filepath 图片文件路径
 */
exports.uploadImage = async function(filepath) {
  const { accessToken } = await this.ensureAccessToken();
  const stat = await statAsync(filepath);

  const form = formstream();
  form.file("media", filepath, path.basename(filepath), stat.size);
  const url =
    "https://api.weixin.qq.com/cgi-bin/media/upload?access_token=" +
    accessToken +
    "&type=image";
  const opts = {
    method: "POST",
    timeout: 60000, // 60秒超时
    headers: form.headers(),
    data: form
  };
  opts.headers.Accept = "application/json";
  return this.request(url, opts);
};
