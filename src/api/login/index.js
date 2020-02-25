import request from  "@/api/requse.js"



function doLogin(data) {
    return request({
      url: '/api/leju/front/user/doLogin',
      method: 'post',
      data
    })
}


export default  { doLogin  } 