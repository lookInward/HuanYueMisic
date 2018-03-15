import { commonParams, options } from './config';
import Axios from 'axios';

export const url = '/api/getRank'
export const data = Object.assign({}, commonParams, {
  g_tk: 5381,
  uin: 0,
  format: 'json',
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  platform: 'h5',
  needNewCode: 1,
  _: 1518981857960
})

export function getRankList(topid) {
  const url = '/api/getRankList'

  const data = Object.assign({}, commonParams, {
    topid,
    needNewCode: 1,
    uin: 0,
    tpl: 3,
    page: 'detail',
    type: 'top',
    platform: 'h5',
    _: 1519907739953,
    format: 'json',
    g_tk: 5381,
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
  })

  return Axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data);
  })
}
