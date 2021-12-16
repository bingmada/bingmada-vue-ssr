/*
 * @Author: liyingda
 * @Date: 2021-12-16 15:04:52
 * @LastEditors: liyingda
 * @LastEditTime: 2021-12-16 16:12:24
 */
import Axios from 'axios';
import { response } from 'express';

const baseUrl = process.env.NODE_ENV === 'production' ? '' : ''

const service = axios.create({
  baseUrl,
  timeout: 10000,
})

// 接口请求报错的时候，伪装成正常错误，由业务提示toast
const apiErrorHandler = () => {
  // 错误抛到业务代码
  return Promise.resolve({ code: -10000, msg: '哦，似乎网络开小差了~' });
};
service.interceptors.request.use(config => {

}, apiErrorHandler)

service.interceptors.response.use(async response =>{
  const status = response.status;
  if (status < 200 || status >= 300) {
    // 处理http错误
    return apiErrorHandler();
  }
  return Promise.resolve(response.data);
}, apiErrorHandler)


// get请求
const get = (url, params, config) => service.get(url, { ...config, params });

// post请求
const post = (url, params, config) => service.post(url, params, config);

// put请求
const put = (url, params, config) => service.put(url, params, config);

// delete请求
const del = (url, params, config) => service.delete(url, { ...config, params });
export { get, post, put, del }