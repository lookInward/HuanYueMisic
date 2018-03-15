import Axios from 'axios';

export function subLogin(name,pass) {
    let url='/login';
     
    const data = Object.assign({},  {
     name,
     pass
    })
  
    return Axios.get(url, {
      params: data
    }).then(res => {
      return Promise.resolve(res.data);
    })
  }

  export function subRegist(name,pass) {
    let url='/regist';
     
    const data = Object.assign({},  {
     name,
     pass
    })
  
    return Axios.get(url, {
      params: data
    }).then(res => {
      return Promise.resolve(res.data);
    })
  }


  