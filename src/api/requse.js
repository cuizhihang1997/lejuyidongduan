

import axios from "axios"

import qs  from "qs"

const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
  })

function http(config){
    //动手脚
    if(config.method.toLowerCase() == 'post'){
      // qs系列化  
      // https://www.npmjs.com/package/qs 
      //  arrayFormat: 'repeat' 作用:  { a: ['b', 'c'] }  ==> 'a=b&a=c'
      //  allowDots: true  作用: { a: { b: { c: 'd', e: 'f' } } }  ==>  'a.b.c=d&a.b.e=f'
      config.data = qs.stringify(config.data, { arrayFormat: 'repeat',allowDots: true  })
    }else{
      config.params = config.data
    }
  
    return  service(config);
  }
  export default http
  