import axios from 'axios';
export function getSmile(page,maxResult){
    const url='http://route.showapi.com/341-1';
    const data={
    maxResult,
    page,
    showapi_appid:57607,
    showapi_test_draft:false,
    showapi_sign:'63dcb99a8437405c8d1ac8207f60b77b'
}
    return axios.get(url,{
        params:data
    }).then((res)=>{
        return Promise.resolve(res.data);
    })
}
