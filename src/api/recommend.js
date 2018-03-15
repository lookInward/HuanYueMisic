import Axios from 'axios';
import {commonParams, options} from './config'

export function getSongList(disstid) {
    const url = 'http://ustbhuangyi.com/music/api/getCdInfo'
  
    const data = Object.assign({}, commonParams, {
      disstid,
      g_tk:67232076,
      inCharset:utf-8,
      outCharset:utf-8,
      notice:0,
      format:jsonp,
      type:1,
      json:1,
      utf8:1,
      onlysong:0,
      platform:yqq,
      hostUin:0,
      needNewCode:0
    })
  
    return jsonp(url, data, options)
  }

  export function getDescList(disstid) {
    const url = '/api/getDescList'
  
    const data = Object.assign({}, commonParams, {
      disstid,
      type: 1,
      json: 1,
      utf8: 1,
      onlysong: 0,
      platform: 'yqq',
      hostUin: 0,
      needNewCode: 0
    })
  
    return Axios.get(url,{
      params:data
    }).then(res=>{
      return Promise.resolve(res.data);
    })
  }


