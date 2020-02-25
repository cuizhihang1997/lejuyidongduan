import request from  "@/api/requse.js"




function doreg(data) {
    return request({
      url:'/api/leju/front/user/register',
      method: 'post',
      data
    })
}


export default  { doreg  } 