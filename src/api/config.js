export const ERR_OK=0;
/**轮播图 */
export const commonParams={
    g_tk:5381,
    uin:0,
    format:'json',
    inCharset:'utf-8',
    outCharset:'utf-8',
    notice:0,
    platform:'h5',
    needNewCode:1,
    _:'1516435865973'
    };
 export   const url='https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
 export   const data=commonParams;
 export   const options = {param: 'jsonpCallback'};
/**推荐歌单 */
export const commonParamsList=Object.assign(commonParams,{
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
});
export const urlList='/api/getDiscList';
/**歌手表单 */
const singerData = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq'
  });
  const songerUrl = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg';


