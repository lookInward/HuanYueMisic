/*对引入的jsonp做一个封装，利用到promise */
import originJsonp from 'jsonp'
import { resolve } from 'url';

export default function jsonp(url,data,option){
    url+=(url.indexOf('?')<0?'?':'&')+param(data);

    return new Promise((resolve,reject)=>{
        originJsonp(url,option,(err,data)=>{
            if(!err){
                resolve(data);
            }else{
                reject(err);
            }
        })
    })
}

export function param(data){
    let url='';
    for(var k in data){
        let value=data[k]!==undefined?data[k]:'';
        url+='&'+k+'='+encodeURIComponent(value);//encodeURIComponent()将用来分隔URI各个部分的标点符号转义                      
    }
    return url?url.substring(1):''; //从第一个字符开始提取，省略了&
}